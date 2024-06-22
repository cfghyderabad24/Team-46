import React, { useState } from 'react';
import '../Styles/Transaction.css';

const TransactionPage = () => {
  const [selectedMode, setSelectedMode] = useState('card');
  const [upiOption, setUpiOption] = useState('phonepe');
  const [upiId, setUpiId] = useState('');
  const [upiVerified, setUpiVerified] = useState(false);

  const verifyUpiId = () => {
    // Placeholder for UPI ID verification logic
    if (upiId) {
      setUpiVerified(true);
      alert('UPI ID verified successfully');
    } else {
      alert('Please enter a valid UPI ID');
    }
  };

  const renderPaymentForm = () => {
    switch (selectedMode) {
      case 'card':
        return (
          <div className="payment-form">
            <h3>Card Payment</h3>
            <label>
              Card Number:
              <input type="text" placeholder="Enter card number" />
            </label>
            <label>
              Expiry Date:
              <input type="text" placeholder="MM/YY" />
            </label>
            <label>
              CVV:
              <input type="text" placeholder="CVV" />
            </label>
            <label>
              Card Holder Name:
              <input type="text" placeholder="Enter card holder name" />
            </label>
            <div className="proceed-button" onClick={() => alert('Proceed to Payment')}>
              Proceed to Payment
            </div>
          </div>
        );
      case 'netbanking':
        return (
          <div className="payment-form">
            <h3>Net Banking</h3>
            <label>
              Bank Name:
              <input type="text" placeholder="Enter bank name" />
            </label>
            <label>
              Account Number:
              <input type="text" placeholder="Enter account number" />
            </label>
            <label>
              IFSC Code:
              <input type="text" placeholder="Enter IFSC code" />
            </label>
            <div className="proceed-button" onClick={() => alert('Proceed to Payment')}>
              Proceed to Payment
            </div>
          </div>
        );
      case 'upi':
        return (
          <div className="payment-form">
            <h3>UPI Payment</h3>
            <label>
              Select UPI App:
              <select onChange={(e) => setUpiOption(e.target.value)} value={upiOption}>
                <option value="phonepe">PhonePe</option>
                <option value="gpay">Google Pay</option>
              </select>
            </label>
            <label>
              UPI ID:
              <input
                type="text"
                placeholder="Enter UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            </label>
            <div className="verify-upi" onClick={verifyUpiId}>
              Verify UPI ID
            </div>
            {upiVerified && (
              <div className="proceed-button" onClick={() => alert('Proceed to Payment')}>
                Proceed to Payment
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="transaction-page">
      <div className="left-container">
        <h2>Payment Modes</h2>
        <ul>
          <li onClick={() => setSelectedMode('card')}>Card</li>
          <li onClick={() => setSelectedMode('netbanking')}>Net Banking</li>
          <li onClick={() => setSelectedMode('upi')}>UPI</li>
        </ul>
      </div>
      <div className="right-container">
        {renderPaymentForm()}
      </div>
    </div>
  );
};

export default TransactionPage;
