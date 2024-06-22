import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import image from './assets/OIP.jpeg';
import './Mbody.css'; // Import your CSS file

function Mbody() {
  return (
    <div className="mbody-container">
      <div className="image-section">
        <img className="imagesec" src={image} alt="Logo" />
      </div>
      <div className="content">
        <h2>Let's break the silence and break the cycle.</h2>
        <h4>Together, with your contribution, we can ensure every girl has access to safe and healthy periods.</h4>
        <p>Our Champions program facilitates access to a healthy and dignified healthcare management and education for underprivileged girls and women from urban slums. All the donations go towards enrolling girls in our year-long online curriculum that provides education on physical, mental, and social health.
        The program also includes access to a health kit consisting of a monthly supply of sanitary napkins, underwear, and prescribed multivitamins. Additionally, participants benefit from telehealth sessions for their holistic development.</p>
        <br></br><br></br><br></br>
        <div className="centered-button">
          <Link to="/transaction" className="btn-pay">
            Pay 900
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Mbody;
