import { Client, Environment } from 'square';
import type { SquarePayment } from '../types/square';
import { logWebhookEvent, logWebhookError } from '../utils/logger';

const squareClient = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: process.env.NODE_ENV === 'production' ? 
    Environment.Production : 
    Environment.Sandbox
});

export async function handlePaymentCreated(payment: SquarePayment): Promise<void> {
  try {
    logWebhookEvent('payment.created.processing', {
      paymentId: payment.id,
      status: payment.status,
      amount: payment.amount_money
    });

    // Verify payment details with Square API
    const { result } = await squareClient.paymentsApi.getPayment(payment.id);
    
    if (result.payment?.status === 'COMPLETED') {
      // Handle successful payment
      // Example: Update order status, send confirmation email, etc.
      logWebhookEvent('payment.created.success', {
        paymentId: payment.id,
        orderId: payment.order_id,
        receiptUrl: payment.receipt_url
      });
    } else {
      // Handle other payment statuses
      logWebhookEvent('payment.created.pending', {
        paymentId: payment.id,
        status: result.payment?.status
      });
    }
  } catch (error) {
    logWebhookError('payment.created.error', error, { paymentId: payment.id });
    throw error;
  }
}

export async function handlePaymentUpdated(payment: SquarePayment): Promise<void> {
  try {
    logWebhookEvent('payment.updated.processing', {
      paymentId: payment.id,
      status: payment.status,
      amount: payment.amount_money
    });

    const { result } = await squareClient.paymentsApi.getPayment(payment.id);
    
    switch (result.payment?.status) {
      case 'COMPLETED':
        // Handle payment completion
        logWebhookEvent('payment.updated.completed', {
          paymentId: payment.id,
          orderId: payment.order_id
        });
        break;

      case 'FAILED':
        // Handle payment failure
        logWebhookEvent('payment.updated.failed', {
          paymentId: payment.id,
          orderId: payment.order_id
        });
        break;

      default:
        logWebhookEvent('payment.updated.status', {
          paymentId: payment.id,
          status: result.payment?.status
        });
    }
  } catch (error) {
    logWebhookError('payment.updated.error', error, { paymentId: payment.id });
    throw error;
  }
}