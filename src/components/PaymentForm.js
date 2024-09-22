// src/components/PaymentForm.js
import React, { useState } from 'react';

function PaymentForm({ onCreatePaymentRequest }) {
  const [amount, setAmount] = useState('');
  const [merchantAddress, setMerchantAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && merchantAddress) {
      onCreatePaymentRequest({ amount, merchantAddress });
      setAmount('');
      setMerchantAddress('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Payment Request</h2>
      <div>
        <label>Amount (in ETH):</label>
        <input
          type="number"
          step="any"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Your Wallet Address:</label>
        <input
          type="text"
          value={merchantAddress}
          onChange={(e) => setMerchantAddress(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Request</button>
    </form>
  );
}

export default PaymentForm;
