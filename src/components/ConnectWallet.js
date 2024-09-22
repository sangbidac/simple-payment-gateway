import React, { useState } from 'react';
import { ethers } from 'ethers';
import { Button, Alert } from 'react-bootstrap';

function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState('');
  const [error, setError] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setWalletAddress(await signer.getAddress());
      } catch (err) {
        setError('Failed to connect wallet');
        console.error('Error:', err);
      }
    } else {
      alert('Please install MetaMask');
    }
  };

  return (
    <div className="container my-3">
      {error && <Alert variant="danger">{error}</Alert>}
      <Button variant="primary" onClick={connectWallet}>
        {walletAddress ? 'Wallet Connected' : 'Connect Wallet'}
      </Button>
      {walletAddress && <p className="mt-3">Connected Address: {walletAddress}</p>}
    </div>
  );
}

export default ConnectWallet;
