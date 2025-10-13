import React from 'react'
import './Billing.css'
import BillingTablet from '../components/BillingTablet'

function Billing() {
  return (
    <div className='main_billing_div'>
      <BillingTablet/>
      <BillingTablet/>
      <BillingTablet/>
      <BillingTablet/>
    </div>

  )
}

export default Billing