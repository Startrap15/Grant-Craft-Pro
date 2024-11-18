import { WebhookEvent } from 'square';

export interface SquarePayment {
  id: string;
  status: 'APPROVED' | 'COMPLETED' | 'FAILED' | 'PENDING';
  amount_money: {
    amount: number;
    currency: string;
  };
  created_at: string;
  updated_at: string;
  receipt_number?: string;
  receipt_url?: string;
  order_id?: string;
  location_id: string;
}

export interface SquareWebhookEvent extends WebhookEvent {
  merchant_id: string;
  type: 'payment.created' | 'payment.updated';
  event_id: string;
  created_at: string;
  data: {
    type: 'payment';
    id: string;
    object: SquarePayment;
  };
}