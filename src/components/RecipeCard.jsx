import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import '../styles/RecipeCard.css';

const RecipeCard = ({ name, image, price, rating, description }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star" />);
    }
    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalf} className="star" />);
    }
    return stars;
  };

  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={image} alt={name} />
        <div className="price-tag">${price}</div>
      </div>
      <div className="recipe-content">
        <h3>{name}</h3>
        <div className="rating">
          {renderStars(rating)}
          <span>{rating}</span>
        </div>
        <p className="description">{description}</p>
        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
};

export default RecipeCard;