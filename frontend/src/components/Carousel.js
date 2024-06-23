import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.css'; // Corrected to .module.css for CSS modules
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import menImage from './men.jpg'; // Import the image
import './Statistics.css'
import { FaUsers, FaHandsHelping, FaChalkboardTeacher, FaHandshake, FaNewspaper, FaAward } from 'react-icons/fa';
function MyCarousel() {
  const navigate = useNavigate();

  return (
    <div>
      <div className='top-of-page'></div>
      <Header />
    
      <Carousel
        interval={5000}
        style={{
          minHeight: '100vh',
          backgroundColor: '#FFCBC4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 20px',
        }}
        className='mb-5'
      >
        <Carousel.Item style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ flex: 1, textAlign: 'left' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }} className='text-dark'>
              Ditch Discomfort,<br />
              Embrace the Cup..!
            </h2>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2721/2721170.png"
            alt="Cup"
            style={{ flex: 1, maxWidth: '50%', height: 'auto', objectFit: 'contain' }}
          />
        </Carousel.Item>


     
      <Carousel.Item style={{ height: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/2721/2721170.png" alt="Cup" style={{ maxWidth: '50%', height: 'auto', objectFit: 'contain' }} />
      </Carousel.Item>
    </Carousel>
      
      <section id="about-section" style={{ height: '70vh', backgroundColor: '#f1efed', position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div style={{ marginLeft: '20px', width: '50%' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Us</h2>
          <p>We are a group individuals who have gathered to address the fallouts of climate change, gender inequalities and detrimental health practices that exist in our urban and rural communities, by engaging different social strata in a comprehensive manner.

To problematize our focus areas and engage with them holistically, we work with a participatory and collaborative approach through action-driven goals that include:
          </p>
          <ul>
            <li>Periodic Awareness Campaigns.</li>
            <li>Stakeholders’ Conversation.</li>
            <li>Intensive Training Programs.</li>
            <li>Capacity Building.</li>
          </ul>
        </div>
        <img src='https://img.freepik.com/premium-vector/menstrual-cup-menstrual-hygiene-device-sanitary-woman-cup-personal-hygiene-product-pink_615232-1317.jpg' alt="Men Image" style={{ position: 'absolute', top: 0, right: 0, width: '450px', height: '70vh' }} />
      </section>
      
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
      <Footer />
    </div>
  );
}

export default MyCarousel;
