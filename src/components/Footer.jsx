import React from 'react';
import { Link } from 'react-router-dom';

/*
  Footer Component:
  Displays clean sitemap links and teammate placeholders at the bottom.
*/
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>MoodMeal</h3>
          <p>Find the perfect food for your mood. Made for group frontend project submission.</p>
        </div>
        
        <div className="footer-links">
          <h4>Sitemap</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Other Links</h4>
          <ul>
            {/* Teammate placeholder link tags */}
            <li><a href="#about" onClick={(e) => e.preventDefault()}>About Us (Teammate)</a></li>
            <li><a href="#contact" onClick={(e) => e.preventDefault()}>Contact Us (Teammate)</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 MoodMeal. Simple React Frontend Project.</p>
      </div>
    </footer>
  );
}
