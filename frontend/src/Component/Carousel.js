import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.css'; // Corrected to .module.css for CSS modules
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
function MyCarousel() {
  const navigate = useNavigate();
  return (
    
    <Carousel interval={3000}>
         {/* Set the interval for automatic sliding */}
      <Carousel.Item>
        <img className='w-100' src="https://t3.ftcdn.net/jpg/04/68/47/46/360_F_468474640_YcXTQsmw1U2sqnFG8vZyTq8SyoYsbvva.jpg" alt="First slide" /> {/* Ensure image paths are correct */}
        <Carousel.Caption className={styles.centered}>
          <h3>MEXICAN</h3>
          <p>Experience the vibrant flavors of Mexico in every bite</p>
          <button onClick={() => { navigate('/reciepes-page', { state: "MEXICAN" }) }} className='btn btn-warning'>MEXICAN</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-100' src="https://t4.ftcdn.net/jpg/04/00/90/57/360_F_400905748_WsPN5kRwlCzxT324AnGourx9zYUsfXN1.jpg" alt="Second slide" /> {/* Ensure image paths are correct */}
        <Carousel.Caption className={styles.centered}>
          <h3>INDIAN</h3>
          <p>Savor the rich spices and aromas of authentic Indian dishes</p>
          <button onClick={() => { navigate('/reciepes-page', { state: "INDIAN" }) }} className='btn btn-warning'>INDIAN</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-100' src="path_to_image3.jpg" alt="Third slide" /> {/* Ensure image paths are correct */}
        <Carousel.Caption className={styles.centered}>
          <h3>CHINESE</h3>
          <p>Indulge in the diverse tastes and textures of traditional Chinese cooking</p>
          <button onClick={() => { navigate('/reciepes-page', { state: "CHINESE" }) }} className='btn btn-warning'>CHINESE</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='w-100' src="" alt="Fourth slide" /> {/* Ensure image paths are correct */}
        <Carousel.Caption className={styles.centered}>
          <h3>ITALIAN</h3>
          <p>Discover the passion and simplicity of classic Italian recipes</p>
          <button onClick={() => { navigate('/reciepes-page', { state: "ITALIAN" }) }} className='btn btn-warning'>ITALIAN</button>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  );
}

export default MyCarousel;