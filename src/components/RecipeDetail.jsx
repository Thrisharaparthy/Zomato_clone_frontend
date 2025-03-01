import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faFire, faCartPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/RecipeDetail.css';

function RecipeDetail({ menuItems }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const recipe = menuItems.find(item => item.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="recipe-detail-error">
        <h2>Recipe not found</h2>
        <button onClick={() => navigate('/menu')} className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Menu
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(recipe);
    // Show feedback that item was added
    alert('Item added to cart!');
  };

  return (
    <div className="recipe-detail">
      <button onClick={() => navigate(-1)} className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
      
      <div className="recipe-content">
        <div className="recipe-image">
          <img src={recipe.image} alt={recipe.name} />
          {recipe.isVegetarian && (
            <span className="veg-badge">
              <FontAwesomeIcon icon={faLeaf} /> Vegetarian
            </span>
          )}
          <span className="spicy-badge">
            <FontAwesomeIcon icon={faFire} /> {recipe.spicyLevel}
          </span>
        </div>

        <div className="recipe-info">
          <h1>{recipe.name}</h1>
          <p className="description">{recipe.description}</p>
          <div className="category">{recipe.category}</div>
          <div className="price">${recipe.price.toFixed(2)}</div>
          
          <div className="actions">
            <button className="add-to-cart" onClick={handleAddToCart}>
              <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;