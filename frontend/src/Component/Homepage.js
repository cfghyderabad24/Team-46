import React from 'react';
import './Homepage.css';
import './Footer';
import Footer from './Footer';
import MyCarousel from './Carousel';
const Homepage = () => {
  return (
    <div className="homepage">
      <MyCarousel />
      <div className="main-content">
        <aside className="sidebar">
          <ul>
            <li>New</li>
            <li>Old</li>
            <li>Renew</li>
          </ul>
        </aside>
        <div className="content">
         
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
