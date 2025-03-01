import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faFire } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from './LoadingSpinner';
import '../styles/RecipeGrid.css';

function RecipeGrid({ items, loading, error }) {
  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;
  if (!items.length) return <div className="no-items">No menu items available</div>;

  return (
    <div className="recipe-grid">
      {items.map(item => (
        <Link to={`/recipe/${item.id}`} key={item.id} className="recipe-card">
          <div className="recipe-image">
            <img src={item.image} alt={item.name} />
            {item.isVegetarian && (
              <span className="veg-badge">
                <FontAwesomeIcon icon={faLeaf} /> Veg
              </span>
            )}
            <span className="spicy-level">
              <FontAwesomeIcon icon={faFire} /> {item.spicyLevel}
            </span>
          </div>
          <div className="recipe-info">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="recipe-footer">
              <span className="price">${item.price.toFixed(2)}</span>
              <span className="category">{item.category}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RecipeGrid;