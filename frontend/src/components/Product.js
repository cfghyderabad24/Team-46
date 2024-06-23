import React, { useState, useEffect } from 'react';
import cup from './cup.jpg';
import pad from './pad.jpg';
import './Product.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const initialProducts = [
    {
      id: 'Pads1',
      name: 'Pads (Pack-4)',
      price: 600,
      image: pad,
      description: 'Comfortable and absorbent pads for daily use. They are 0% plastic and 100% cloth and can be used up to 2 years. (Pack-4)'
    },
    {
      id: 'Pads2',
      name: 'Pads (Pack-8)',
      price: 800,
      image: pad,
      description: 'Comfortable and absorbent pads for daily use. They are 0% plastic and 100% cloth and can be used up to 2 years. (Pack-8)'
    },
    {
      id: 'Pads3',
      name: 'Pads (Pack-10)',
      price: 1000,
      image: pad,
      description: 'Comfortable and absorbent pads for daily use. They are 0% plastic and 100% cloth and can be used up to 2 years. (Pack-10)'
    },
    {
      id: 'Cup',
      name: 'Cup',
      price: 900,
      image: cup,
      description: 'Reusable and eco-friendly cups and can be used up to 8 years.'
    }
  ];

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);

    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product) => {
    if (isInCart(product.id)) return;

    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const addToWishlist = (product) => {
    if (isInWishlist(product.id)) return;

    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(updatedWishlist);
  };
  const navigate = useNavigate();

  const openCart = () => {
    navigate('/Cart') // Directly redirecting to the cart page
  };

  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const toggleWishlist = () => {
    setShowWishlist(!showWishlist);
  };

  return (
    <div>
      <Header/>
      <div className="product-page">
        <div id="right-container">
          <div className="menu-container">
            {initialProducts.map(product => (
              <div className="menu-category" key={product.id}>
                <div className="menu-item">
                  <h2 className="menu-title">{product.name}</h2>
                  <img src={product.image} alt={product.name} className="food-image" />
                  <div className="food-details">
                    <p>{product.description}</p>
                    <p>Price: {product.price}/-</p>
                    <div className="button-container">
                      <button
                        className={`add-to-cart ${isInCart(product.id) ? 'added' : ''}`}
                        onClick={() => addToCart(product)}
                        style={isInCart(product.id) ? { backgroundColor: 'black', color: 'white' } : {}}
                      >
                        {isInCart(product.id) ? 'Added' : 'Add to Cart'}
                      </button>
                      <button
                        className={`wishlist-btn ${isInWishlist(product.id) ? 'added' : ''}`}
                        onClick={() => addToWishlist(product)}
                        style={isInWishlist(product.id) ? { backgroundColor: '#e91e63', color: 'white' } : {}}
                      >
                        {isInWishlist(product.id) ? 'Added' : 'Add to Wishlist'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cart-buttons">
          <button className="cart-button" onClick={openCart}>
            View Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
          </button>
          <button className="wishlist-button" onClick={toggleWishlist}>
            View Wishlist
          </button>
        </div>
        {showWishlist && (
          <div className="wishlist-modal">
            <div className="wishlist-content">
              <h2>Wishlist</h2>
              <ul>
                {wishlist.map((item, index) => (
                  <li key={index}>
                    <img src={item.image} alt={item.name} className="wishlist-image" />
                    <div className="wishlist-details">
                      <h3>{item.name}</h3>
                      <p>Price: {item.price}/-</p>
                      <button onClick={() => removeFromWishlist(item.id)} className="remove-btn">
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="wishlist-close" onClick={toggleWishlist}>
                Close
              </button>
            </div>
            <div className="wishlist-overlay" onClick={toggleWishlist}></div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Product;
