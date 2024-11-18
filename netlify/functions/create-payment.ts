import { Handler } from '@netlify/functions';
import { Client, Environment } from 'square';

const squareClient = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: process.env.NODE_ENV === 'production' ? 
    Environment.Production : 
    Environment.Sandbox
});

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
      headers: { 'Content-Type': 'application/json' }
    };
  }

  try {
    const { sourceId, amount, currency = 'USD' } = JSON.parse(event.body || '');

    if (!sourceId || !amount) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required parameters' }),
        headers: { 'Content-Type': 'application/json' }
      };
    }

    const idempotencyKey = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const { result } = await squareClient.paymentsApi.createPayment({
      sourceId,
      idempotencyKey,
      amountMoney: {
        amount: BigInt(amount * 100),
        currency
      },
      locationId: process.env.SQUARE_LOCATION_ID,
      autocomplete: true
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        payment: result.payment,
        orderId: result.payment?.orderId
      }),
      headers: { 'Content-Type': 'application/json' }
    };

  } catch (error) {
    console.error('Payment processing error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false,
        error: 'Payment processing failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      headers: { 'Content-Type': 'application/json' }
    };
  }
}