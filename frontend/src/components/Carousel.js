import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.css'; // Corrected to .module.css for CSS modules
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import menImage from './men.jpg'; // Import the image

function MyCarousel() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
    
      <Carousel interval={3000} style={{ minHeight: '100vh' }} className='mb-5'>
        <Carousel.Item style={{ height: '100vh', backgroundColor: '#FFCBC4', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }} className='text-dark'>Ditch Discomfort,<br />
            Embrace the Cup..!</h2>
          </div>
          <img src="https://cdn-icons-png.flaticon.com/512/2721/2721170.pngalt="  style={{ flex: '1', maxWidth: '50%', height: 'auto', objectFit: 'contain' }} />
        </Carousel.Item>
        
        <Carousel.Item style={{ height: '100vh', backgroundColor: '#FFCBC4', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }} className='text-dark'>Ditch Discomfort,<br />
            Embrace the Cup..!</h2>
          </div>
          <img src="https://cdn-icons-png.flaticon.com/512/2721/2721170.png"  style={{ flex: '1', maxWidth: '50%', height: 'auto', objectFit: 'contain' }} />
        </Carousel.Item>
      </Carousel>
      
      <section id="about-section" style={{ height: '80vh', backgroundColor: '#f1efed', position: 'relative', display: 'flex', alignItems: 'center' }}>
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
        <img src='https://img.freepik.com/premium-vector/menstrual-cup-menstrual-hygiene-device-sanitary-woman-cup-personal-hygiene-product-pink_615232-1317.jpg' alt="Men Image" style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: 'auto' }} />
      </section>
      
      <Footer />
    </div>
  );
}

export default MyCarousel;
