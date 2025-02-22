import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHome, faUtensils, faCalendar, faComment, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../styles/MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <button className="close-menu" onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <nav className="mobile-nav">
        <a href="#home" onClick={onClose}>
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </a>
        <a href="#recipes" onClick={onClose}>
          <FontAwesomeIcon icon={faUtensils} />
          <span>Menu</span>
        </a>
        <a href="#booking" onClick={onClose}>
          <FontAwesomeIcon icon={faCalendar} />
          <span>Book Table</span>
        </a>
        <a href="#feedback" onClick={onClose}>
          <FontAwesomeIcon icon={faComment} />
          <span>Feedback</span>
        </a>
        <a href="#cart" onClick={onClose}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Cart</span>
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;