import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
// Update the import path
import { recipes } from '../recipes';
// ... rest of the code stays the same
import '../styles/RecipeDetail.css';

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
      <div className="recipe-detail-content">
        <img src={recipe.image} alt={recipe.name} />
        <div className="recipe-info">
          <h1>{recipe.name}</h1>
          <div className="rating">
            <FontAwesomeIcon icon={faStar} /> {recipe.rating}
          </div>
          <p className="price">{recipe.price}</p>
          <div className="description">
            <h2>Description</h2>
            <p>Delicious {recipe.name} prepared with the finest ingredients.</p>
          </div>
          <button className="checkout-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;