import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faFire } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from './LoadingSpinner';
import '../styles/SearchResults.css';

function SearchResults({ results, loading, error }) {
  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;
  if (!results.length) return <div className="no-results">No items found matching your search</div>;

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="results-grid">
        {results.map(item => (
          <Link to={`/recipe/${item.id}`} key={item.id} className="result-card">
            <div className="result-image">
              <img src={item.image} alt={item.name} />
              {item.isVegetarian && (
                <span className="veg-badge">
                  <FontAwesomeIcon icon={faLeaf} /> Veg
                </span>
              )}
              <span className="spicy-badge">
                <FontAwesomeIcon icon={faFire} /> {item.spicyLevel}
              </span>
            </div>
            <div className="result-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="result-footer">
                <span className="price">${item.price.toFixed(2)}</span>
                <span className="category">{item.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;