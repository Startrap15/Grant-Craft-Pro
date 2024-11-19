import React from 'react'
import { createCheckoutSession } from '../api/stripe'

const Checkout: React.FC = () => {
  const handleCheckout = async (priceId: string) => {
    try {
      const session = await createCheckoutSession(priceId)
      // Handle the session response
      console.log('Checkout session created:', session)
    } catch (error) {
      console.error('Error creating checkout session:', error)
    }
  }

  return (
    <div>
      <h2>Checkout</h2>
      {/* Add your checkout UI here */}
    </div>
  )
}

export default Checkout