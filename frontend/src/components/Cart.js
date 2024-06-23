import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Cart.css';
import Header from './Header';
import Footer from './Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCartItems(updatedCart);
  };

  const handleDonationChange = (id, isDonation) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, isDonation } : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const getTotalQty = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = async () => {
    const totalAmount = getTotalPrice();

    try {
      const response = await axios.post('http://localhost:4000/create-order', {
        amount: totalAmount
      });

      const options = {
        key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: response.data.amount, // amount in the smallest currency unit
        currency: response.data.currency,
        name: "Your Company Name",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: response.data.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          clearCart();
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999"
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  return (
    <div className="App">
      <Header />
      <main className="Cart">
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
              <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
