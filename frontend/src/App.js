import React from 'react';
import './styles.css';
import Header from './Header';

const App = () => {
  return (
    <div>
      
    <div className="App">
      <header className="App-header">
        <h1>Sponsor a Girl</h1>
        <p>Your sponsorship will help provide menstrual hygiene support to girls in need.</p>
        <img src="https://example.com/menstrual-hygiene.jpg" alt="Menstrual Hygiene" className="header-image"/>
      </header>
      <div className="content">
        <h2>How Your Sponsorship Helps</h2>
        <p>
          Your sponsorship will ensure that girls have access to essential menstrual hygiene products and education.
          This support helps them manage their menstrual health with dignity and comfort.
        </p>
        <p>
          Access to menstrual hygiene products enables girls to attend school regularly, participate in daily activities,
          and maintain good health. It empowers them by removing barriers related to menstruation.
        </p>
        <img src="https://example.com/menstrual-education.jpg" alt="Menstrual Education" className="product-image"/>
      </div>
      <button onClick={() => window.location.href = 'https://paymentgateway.com/transaction?amount=900'} className="donate-button">
        Donate 900
      </button>
    </div>
    </div>
  );
}

export default App;
