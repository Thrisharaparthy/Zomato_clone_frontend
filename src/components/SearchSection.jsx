import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import '../styles/SearchSection.css';

function SearchSection({ onSearch }) {
  const [location, setLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      await onSearch(searchTerm);
      navigate('/search');
    }
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