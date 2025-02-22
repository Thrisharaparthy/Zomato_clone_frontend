import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
// Update the import path
import { recipes } from '../recipes';
// ... rest of the code stays the same
import '../styles/RecipeGrid.css';

function RecipeGrid() {
  const navigate = useNavigate();

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} />);
    }
    return stars;
  };

  return (
    <section id="recipes" className="recipe-grid">
      <h2>Popular Recipes</h2>
      <div className="recipe-container">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <img 
              src={recipe.image} 
              alt={recipe.name} 
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            />
            <h3>{recipe.name}</h3>
            <div className="rating">
              {renderStars(recipe.rating)}
              <span>{recipe.rating}</span>
            </div>
            <p className="price">{recipe.price}</p>
            <button 
              className="book-btn"
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecipeGrid;