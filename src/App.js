// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js

// src/App.js
import React, { useState } from 'react';
import ConnectWallet from './components/ConnectWallet';
import PaymentForm from './components/PaymentForm';
import ProcessPayment from './components/ProcessPayment';
import { Container, Navbar } from 'react-bootstrap';

function App() {
  const [paymentRequest, setPaymentRequest] = useState(null);

  const handleCreatePaymentRequest = (request) => {
    setPaymentRequest(request);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Crypto Payment Gateway</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <ConnectWallet />
        {!paymentRequest ? (
          <PaymentForm onCreatePaymentRequest={handleCreatePaymentRequest} />
        ) : (
          <ProcessPayment paymentRequest={paymentRequest} />
        )}
      </Container>
    </div>
  );
}

export default App;
