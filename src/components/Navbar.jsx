import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="logo">
        <FontAwesomeIcon icon={faUtensils} className="logo-icon" />
        <h2>Food Zone</h2>
      </Link>
      
      <div className="nav-container">
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="nav-actions">
          <Link to="/cart" className="cart-btn">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-count">0</span>
          </Link>
          <button className="login-btn">
            <FontAwesomeIcon icon={faUser} />
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;