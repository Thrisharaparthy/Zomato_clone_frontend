import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css'; // Make sure this import is present

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <FontAwesomeIcon icon={faUtensils} className="logo-icon" />
            <h2>Food Zone</h2>
          </div>
          <p className="footer-description">
            Discover the best food and drinks in your area. We make finding and ordering food easier than ever.
          </p>
          <div className="social-links">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li><span className="contact-icon">📍</span> 123 Food Street, Cuisine City</li>
            <li><span className="contact-icon">📞</span> (555) 123-4567</li>
            <li><span className="contact-icon">✉️</span> info@foodzone.com</li>
            <li><span className="contact-icon">⏰</span> Mon-Sun: 10:00 AM - 11:00 PM</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <p className="newsletter-text">Subscribe to our newsletter for offers and updates</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Food Zone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;