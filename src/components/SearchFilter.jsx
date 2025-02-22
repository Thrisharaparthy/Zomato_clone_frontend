import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import '../styles/SearchFilter.css';

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [category, setCategory] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, priceRange, category });
  };

  return (
    <div className="search-filter">
      <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filters">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="pizza">Pizza</option>
            <option value="burger">Burgers</option>
            <option value="sushi">Sushi</option>
            <option value="indian">Indian</option>
            <option value="dessert">Desserts</option>
          </select>
          <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
            <option value="all">Price Range</option>
            <option value="low">Under $10</option>
            <option value="medium">$10 - $20</option>
            <option value="high">Above $20</option>
          </select>
          <button type="submit" className="filter-btn">
            <FontAwesomeIcon icon={faFilter} /> Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilter;