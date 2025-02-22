import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <FontAwesomeIcon icon={faUtensils} />
        <span>Food Zone</span>
      </Link>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="login-btn" onClick={() => setShowLogin(true)}>
          <FontAwesomeIcon icon={faUser} />
          <span>Login</span>
        </button>
      </div>

      {showLogin && (
        <div className="login-modal">
          <div className="login-content">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Sign In</button>
            </form>
            <p>Don't have an account? <a href="#">Sign up</a></p>
            <button className="close-btn" onClick={() => setShowLogin(false)}>×</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;