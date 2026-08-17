import React, { useState } from 'react';
// Import routing components from react-router-dom
import { Routes, Route } from 'react-router-dom';
// Import custom components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from "./pages/Contact";
// Import stylesheet
import './App.css';

/*
  App Component:
  The main entry and container for our React website.
  This holds global state for the shopping cart ('cartItems')
  and provides functions to manage adding and removing items.
*/
export default function App() {
  /*
    useState Hooks:
    - 'cartItems' stores an array of foods currently added to the cart
    - 'showCartModal' is a boolean flag to show/hide the cart overlay popup
  */
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  // Function to add a food item to the cart
  const handleAddToCart = (food) => {
    setCartItems((prevItems) => {
      // Check if item already exists in cart
      const exists = prevItems.find(item => item.name === food.name);
      if (exists) {
        // Increment quantity
        return prevItems.map(item =>
          item.name === food.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Add as new item with quantity = 1
      return [...prevItems, { ...food, quantity: 1 }];
    });
    alert(`"${food.name}" added to cart!`);
  };

  // Function to remove an item or decrease its quantity
  const handleRemoveFromCart = (foodName) => {
    setCartItems((prevItems) => {
      const item = prevItems.find(item => item.name === foodName);
      if (item.quantity === 1) {
        // Remove item completely
        return prevItems.filter(item => item.name !== foodName);
      }
      // Decrease quantity by 1
      return prevItems.map(item =>
        item.name === foodName ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  // Calculate total number of items in the cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price of cart items
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="app-wrapper">
      {/* 
        Navbar component:
        We pass 'cartCount' and a callback 'onCartClick' as props.
      */}
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setShowCartModal(true)} 
      />

      {/* 
        React Router Routes:
        Defines paths for different pages of our project.
        'Home' page and 'Dashboard' page receive state functions as props.
      */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/dashboard" element={<Dashboard onAddToCart={handleAddToCart} />} />
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer component */}
      <Footer />

      {/* 
        Simple Cart Modal / Popup overlay:
        Rendered conditionally based on the 'showCartModal' state.
      */}
      {showCartModal && (
        <div className="cart-modal-overlay">
          <div className="cart-modal">
            <div className="cart-modal-header">
              <h3>Your Food Cart 🛒</h3>
              <button className="close-modal-btn" onClick={() => setShowCartModal(false)}>
                &times;
              </button>
            </div>
            
            <div className="cart-modal-body">
              {cartItems.length === 0 ? (
                <p className="empty-cart-text">Your cart is empty. Add delicious foods from the menu!</p>
              ) : (
                <div className="cart-items-list">
                  {cartItems.map((item, index) => (
                    <div key={index} className="cart-modal-item">
                      <div className="cart-item-info">
                        <h4>{item.name}</h4>
                        <p className="cart-item-price">₹{item.price} x {item.quantity}</p>
                      </div>
                      <div className="cart-item-actions">
                        <button className="qty-btn" onClick={() => handleRemoveFromCart(item.name)}>-</button>
                        <span className="qty-val">{item.quantity}</span>
                        <button className="qty-btn" onClick={() => handleAddToCart(item)}>+</button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="cart-modal-total">
                    <h4>Total Bill:</h4>
                    <h4>₹{cartTotal}</h4>
                  </div>
                </div>
              )}
            </div>

            <div className="cart-modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowCartModal(false)}>
                Continue Shopping
              </button>
              <button 
                className="btn btn-primary" 
                disabled={cartItems.length === 0}
                onClick={() => {
                  alert(`Order confirmed! Total bill: ₹${cartTotal}. Preparing your meal!`);
                  setCartItems([]);
                  setShowCartModal(false);
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
