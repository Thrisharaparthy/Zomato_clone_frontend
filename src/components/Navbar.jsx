import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const { cartItems } = useCart();
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link to="/" className="logo">
      <img src="/images/logo.png" alt="Food Zone" className="logo-image" />
  <span>Food Zone</span>
</Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
          
          <Link to="/menu" className="nav-link">
            <i className="fas fa-book-open"></i>
            <span>Menu</span>
          </Link>

          <Link to="/cart" className="nav-link cart-link">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </Link>

          {isAuthenticated ? (
            <div className="profile-dropdown">
              <button className="profile-btn">
                <i className="fas fa-user"></i>
                <span>Profile</span>
              </button>
              <div className="dropdown-content">
                <Link to="/orders">My Orders</Link>
                <Link to="/settings">Settings</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="nav-link">
              <i className="fas fa-sign-in-alt"></i>
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;