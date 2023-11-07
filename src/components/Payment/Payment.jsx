import React from 'react'
import './payment.css'

const Payment = () => {
  return (
    <div className="paymentsection">
        <div className="paymentcontent container">
        <div class="payment-container">
        <div class="payment-title">Payment Details</div>
        <div class="form-row">
            <label for="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="Card Number" />
        </div>
        <div class="form-row">
            <label for="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" placeholder="MM/YY" />
        </div>
        <div class="form-row">
            <label for="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="CVV" />
        </div>
        <div class="form-row">
            <label for="passcode">Passcode</label>
            <input type="password" id="passcode" placeholder="Passcode" />
        </div>
        <button class="payment-button">Make Payment</button>
    </div>
        </div>
    </div>
  )
}

export default Payment
