import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import '../styles/Hero.css';

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Discover the best food & drinks</h1>
        <div className="search-container">
          <div className="location-select">
            <FontAwesomeIcon icon={faLocationDot} />
            <input type="text" placeholder="Your Location" />
          </div>
          <div className="search-divider"></div>
          <div className="dish-search">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;