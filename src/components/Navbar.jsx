import React from 'react';
// Import Link and NavLink from react-router-dom to navigate without page refresh
import { Link, NavLink } from 'react-router-dom';

/* 
  Navbar Component:
  This displays the navigation links at the top of the page.
  It receives 'cartCount' as a prop from the parent component (App.jsx)
  to show the number of items in the shopping cart.
*/
export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo redirects back to Homepage */}
        <Link to="/" className="nav-logo">
          <span className="logo-highlight">Mood</span>Meal
        </Link>

        {/* Navigation Menu Links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Dashboard
            </NavLink>
          </li>
          {/* About and Contact are placeholders for teammate work */}
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Contact
            </NavLink>
          </li>

        </ul>

        {/* Cart counter on the right side */}
        <div className="nav-actions">
          <button className="cart-btn" onClick={onCartClick}>
            🛒 Cart ({cartCount})
          </button>
        </div>
      </div>
    </nav>
  );
}
