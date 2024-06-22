import React from 'react';
import './Statistics.css';
import { FaUsers, FaHandsHelping, FaChalkboardTeacher, FaHandshake, FaNewspaper, FaAward } from 'react-icons/fa';

function Statistics() {
  return (
    <div>
      <div className="testimonials-container">
      <h2 className="testimonials-heading">What Our Beneficiaries Say</h2>
      <div className="testimonials">
        <div className="testimonial">
          <p className="testimonial-text">
            "During the pandemic, the healthcare kits from Good Universe were a blessing. They ensured we had the necessary supplies to stay healthy when everything was in short supply. Their timely help made a huge difference for my family."
          </p>
          <br />
          <p className="testimonial-author">- A recipient of the Jeewani initiative</p>
        </div>
        <div className="testimonial">
          <p className="testimonial-text">
            "The sustainability workshops conducted by Good Universe have taught our community valuable lessons in climate resilience. We are now more aware and proactive in our efforts to combat climate change, thanks to their continuous support and education."
          </p>
          <p className="testimonial-author">- A participant in climate resilience training</p>
        </div>
      </div>
    </div>
    <div className="statistics-container">
      <div className="statistics-row">
        <div className="statistics-col">
          <FaUsers className="statistics-icon" />
          <h3 className="counter">57,000+</h3>
          <p>Direct Lives Impacted</p>
        </div>
        <div className="statistics-col">
          <FaHandsHelping className="statistics-icon" />
          <h3 className="counter">100,000+</h3>
          <p>Indirect Lives Impacted</p>
        </div>
        <div className="statistics-col">
          <FaChalkboardTeacher className="statistics-icon" />
          <h3 className="counter">970+</h3>
          <p>Workshops Completed</p>
        </div>
      </div>
      <div className="statistics-row">
        <div className="statistics-col">
          <FaHandshake className="statistics-icon" />
          <h3 className="counter">70+</h3>
          <p>Partners</p>
        </div>
        <div className="statistics-col">
          <FaNewspaper className="statistics-icon" />
          <h3 className="counter">45+</h3>
          <p>Media Features</p>
        </div>
        <div className="statistics-col">
          <FaAward className="statistics-icon" />
          <h3 className="counter">12+</h3>
          <p>Awards</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Statistics;
