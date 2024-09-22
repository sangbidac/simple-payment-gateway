// src/components/ProcessPayment.js
import React from 'react';
import { ethers } from 'ethers';

function ProcessPayment({ paymentRequest }) {
  const { amount, merchantAddress } = paymentRequest;

  const sendPayment = async () => {
    if (!window.ethereum) {
      alert('MetaMask is required to send payments');
      return;
    }

    try {
      // Connect to the Ethereum provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Send the transaction
      const tx = await signer.sendTransaction({
        to: merchantAddress,
        value: ethers.utils.parseEther(amount),
      });

      await tx.wait(); // Wait for the transaction to be mined
      alert('Payment successful!');
    } catch (err) {
      console.error('Error sending payment:', err);
      alert('Payment failed.');
    }
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <p>Amount: {amount} ETH</p>
      <p>Merchant Address: {merchantAddress}</p>
      <button onClick={sendPayment}>Send Payment</button>
    </div>
  );
}

export default ProcessPayment;
