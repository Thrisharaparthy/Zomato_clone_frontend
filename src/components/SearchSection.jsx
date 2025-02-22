import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import '../styles/SearchSection.css';

function SearchSection() {
  const [location, setLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching:', { location, searchTerm });
  };

  return (
    <section className="search-section">
      <div className="search-container">
        <h1>Discover the Best Food & Drinks</h1>
        <div className="search-inputs">
          <div className="location-input">
            <FontAwesomeIcon icon={faLocationDot} className="input-icon" />
            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="food-input">
            <FontAwesomeIcon icon={faSearch} className="input-icon" />
            <input
              type="text"
              placeholder="Search for food"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;