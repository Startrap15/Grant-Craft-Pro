import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-10-28.acacia'
})

const PRICE_IDS = {
  BASIC: 'price_basic',
  PRO: 'price_pro',
  ENTERPRISE: 'price_enterprise'
}

export async function createCheckoutSession(priceId: string) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.DOMAIN}/canceled`,
    })
    
    return session
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw error
  }
}

export { PRICE_IDS }