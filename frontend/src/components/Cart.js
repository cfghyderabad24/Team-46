import axios from 'axios';
import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Pack of 4 pads', price: 600.00, quantity: 1, isDonation: false },
    { id: 2, name: 'Pack of 6 pads', price: 800.00, quantity: 1, isDonation: false },
    { id: 3, name: '1 sanitary cup', price: 650.00, quantity: 1, isDonation: false },
    { id: 4, name: '2 sanitary cups', price: 1300.00, quantity: 1, isDonation: false },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  const handleDonationChange = (id, isDonation) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isDonation } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const getTotalQty = () =>{
    let totalQty = 0;
    cartItems.forEach((item) => {
        totalQty += item.quantity;
    });
    return totalQty;
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = async () => {
    const totalAmount = getTotalPrice();
    const additional_donation = getTotalQty();
    console.log(additional_donation);
    // const donationDetails = cartItems.map(item => ({
    //   id: item.id,
    //   name: item.name,
    //   quantity: item.quantity,
    //   isDonation: item.isDonation,
    // }
    
    // ));

    try {
        // console.log(donationDetails);
      const response = await axios.put('http://localhost:4000/donor-api/donate', {
        additional_donation,
        username:"donor3"        
      });

      if (response.status === 200) {
        alert('Checkout successful: ' + response.data.message);
      } else {
        alert('Checkout failed: ' + response.data.message);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price.toFixed(2)}</p>
                <div className="quantity">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  />
                </div>
                <div className="donation">
                  <label htmlFor={`donation-${item.id}`}>Donate:</label>
                  <input
                    type="checkbox"
                    id={`donation-${item.id}`}
                    checked={item.isDonation}
                    onChange={(e) => handleDonationChange(item.id, e.target.checked)}
                  />
                </div>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
              <div className="item-subtotal">
                Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ₹{getTotalPrice()}</h3>
            <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
