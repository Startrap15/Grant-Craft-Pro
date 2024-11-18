import crypto from 'crypto';
import { logWebhookDebug, logWebhookError } from './logger';

export function verifySquareSignature(
  requestBody: string,
  signatureHeader: string,
  signingKey: string
): boolean {
  if (!signatureHeader || !signingKey) {
    logWebhookError('signature.verification.failed', new Error('Missing signature or signing key'));
    return false;
  }

  try {
    logWebhookDebug('signature.verification.start', {
      hasSignatureHeader: Boolean(signatureHeader),
      bodyLength: requestBody.length
    });

    const signature = crypto
      .createHmac('sha256', signingKey)
      .update(requestBody)
      .digest('base64');

    const isValid = crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(signatureHeader)
    );

    logWebhookDebug('signature.verification.complete', { isValid });
    return isValid;
  } catch (error) {
    logWebhookError('signature.verification.error', error);
    return false;
  }
}