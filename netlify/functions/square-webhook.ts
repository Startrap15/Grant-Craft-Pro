// /netlify/functions/square-webhook.ts

import { Handler } from '@netlify/functions';
import type { SquareWebhookEvent } from './types/square';
import { verifySquareSignature } from './utils/signature-verifier';
import { logWebhookEvent, logWebhookError, logWebhookDebug } from './utils/logger';
import { handlePaymentCreated, handlePaymentUpdated } from './handlers/payment-handlers';

export const handler: Handler = async (event) => {
  // Enhanced request logging with debug information
  logWebhookDebug('webhook.request', {
    method: event.httpMethod,
    path: event.path,
    headers: {
      'content-type': event.headers['content-type'],
      'square-signature': event.headers['x-square-hmacsha256-signature'] ? 'present' : 'missing'
    },
    bodyLength: event.body?.length
  });

  // Verify HTTP method
  if (event.httpMethod !== 'POST') {
    logWebhookError('webhook.method.invalid', new Error(`Invalid method: ${event.httpMethod}`));
    return {
      statusCode: 405,
      headers: { 
        'Content-Type': 'application/json',
        'Allow': 'POST'
      },
      body: JSON.stringify({ 
        error: 'Method not allowed',
        message: 'Only POST requests are accepted'
      })
    };
  }

  // Verify required environment variables
  if (!process.env.SQUARE_WEBHOOK_SIGNING_KEY) {
    logWebhookError('webhook.config.missing', new Error('Missing SQUARE_WEBHOOK_SIGNING_KEY'));
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        error: 'Configuration error',
        message: 'Webhook signing key not configured'
      })
    };
  }

  // Verify webhook signature
  const signatureHeader = event.headers['x-square-hmacsha256-signature'];
  if (!signatureHeader) {
    logWebhookError('webhook.signature.missing', new Error('Missing Square signature header'));
    return {
      statusCode: 401,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        error: 'Unauthorized',
        message: 'Missing signature header'
      })
    };
  }

  const isValid = verifySquareSignature(
    event.body || '',
    signatureHeader,
    process.env.SQUARE_WEBHOOK_SIGNING_KEY
  );

  if (!isValid) {
    logWebhookError('webhook.signature.invalid', new Error('Invalid webhook signature'));
    return {
      statusCode: 401,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        error: 'Unauthorized',
        message: 'Invalid webhook signature'
      })
    };
  }

  try {
    // Parse and validate webhook payload
    if (!event.body) {
      throw new Error('Empty webhook body');
    }

    const webhookEvent = JSON.parse(event.body) as SquareWebhookEvent;
    
    // Log successful webhook receipt
    logWebhookEvent('webhook.received', {
      type: webhookEvent.type,
      eventId: webhookEvent.event_id,
      merchantId: webhookEvent.merchant_id,
      createdAt: webhookEvent.created_at
    });

    // Process webhook based on event type
    switch (webhookEvent.type) {
      case 'payment.created':
        await handlePaymentCreated(webhookEvent.data.object);
        break;

      case 'payment.updated':
        await handlePaymentUpdated(webhookEvent.data.object);
        break;

      default:
        logWebhookEvent('webhook.unhandled', { 
          type: webhookEvent.type,
          eventId: webhookEvent.event_id
        });
        return {
          statusCode: 202,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            received: true,
            message: `Unhandled event type: ${webhookEvent.type}`
          })
        };
    }

    // Return success response
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        received: true,
        eventType: webhookEvent.type,
        eventId: webhookEvent.event_id
      })
    };

  } catch (error) {
    // Enhanced error logging with full context
    logWebhookError('webhook.processing.failed', error, {
      body: event.body,
      headers: {
        'content-type': event.headers['content-type'],
        'square-signature': 'present'
      }
    });

    // Determine if error is parsing related
    const isParsing = error instanceof SyntaxError;
    
    return {
      statusCode: isParsing ? 400 : 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        error: isParsing ? 'Invalid request body' : 'Webhook processing failed',
        message: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
}