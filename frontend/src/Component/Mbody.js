import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import image from './assets/OIP.jpeg';
import './Mbody.css'; 

function Mbody() {
  const [isSubscription, setIsSubscription] = useState(true);
  const [selectedAmount, setSelectedAmount] = useState(900);
  const navigate = useNavigate(); // Ensure you import useNavigate from react-router-dom

  const subscriptionOptions = [
    { label: 'Sponsor A Girl', amount: 3600, frequency: 'Monthly' },
    { label: 'Sponsor 5 Girls', amount: 18000, frequency: 'Monthly' },
    { label: 'Sponsor 10 Girls', amount: 36000, frequency: 'Monthly' },
    { label: 'Sponsor 15 Girls', amount: 54000, frequency: 'Monthly' },
    { label: 'Sponsor 20 Girls', amount: 72000, frequency: 'Monthly' }
  ];

  const oneTimeOptions = [
    { label: 'Sponsor A Girl', amount: 3600 },
    { label: 'Sponsor 5 Girls', amount: 18000 },
    { label: 'Sponsor 10 Girls', amount: 36000 },
    { label: 'Sponsor 15 Girls', amount: 54000 },
    { label: 'Sponsor 20 Girls', amount: 72000 }
  ];

  const handlePaymentClick = (amount) => {
    navigate(`/transaction?amount=${amount}`);
  };

  return (
    <div className="mbody-container">
      <div className="content-section">
        <div className="image-section">
          <img className="imagesec" src={image} alt="Logo" />
        </div>
        <div className="content">
          <h2>Let's break the silence and break the cycle.</h2>
          <h4>Together, with your contribution, we can ensure every girl has access to safe and healthy periods.</h4>
          <p>Our Champions program facilitates access to a healthy and dignified healthcare management and education for underprivileged girls and women from urban slums. All the donations go towards enrolling girls in our year-long online curriculum that provides education on physical, mental, and social health.
          The program also includes access to a health kit consisting of a monthly supply of sanitary napkins, underwear, and prescribed multivitamins. Additionally, participants benefit from telehealth sessions for their holistic development.</p>
        </div>
      </div>

      <div className="form-section-box">
        <div className="form-section">
          <div className="toggle-switch">
            <label className="switch">
              <input type="checkbox" checked={isSubscription} onChange={() => setIsSubscription(!isSubscription)} />
              <span className="slider round"></span>
            </label>
            <span>{isSubscription ? 'Subscription Model' : 'One Time Payment'}</span>
          </div>

          {isSubscription ? (
            <div className="subscription-options">
              {subscriptionOptions.map((option, index) => (
                <button key={index} onClick={() => handlePaymentClick(option.amount)}>
                  {option.label}
                  <br />
                  ₹ {option.amount.toLocaleString()}
                  <br />
                  Frequency: {option.frequency}
                </button>
              ))}
            </div>
          ) : (
            <div className="one-time-options">
              {oneTimeOptions.map((option, index) => (
                <button key={index} onClick={() => handlePaymentClick(option.amount)}>
                  {option.label}
                  <br />
                  ₹ {option.amount.toLocaleString()}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
</div>
  );
}

export default Mbody;
