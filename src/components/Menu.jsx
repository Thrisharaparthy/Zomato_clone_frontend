import React from 'react';
import AddToCart from './AddToCart';
import '../styles/Menu.css';

function Menu({ items, loading, error }) {
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="menu-grid">
        {items.map(item => (
          <div key={item.id} className="menu-item">
            <div className="menu-item-image-container">
              <img 
                src={item.image} 
                alt={item.name} 
                className="menu-item-image"
              />
            </div>
            <div className="menu-item-info">
              <h3>{item.name}</h3>
              <p className="description">{item.description}</p>
              <div className="price">${item.price.toFixed(2)}</div>
              <div className="item-details">
                <span className={`spicy-level ${item.spicyLevel.toLowerCase()}`}>
                  {item.spicyLevel}
                </span>
                <span className={`dietary ${item.isVegetarian ? 'veg' : 'non-veg'}`}>
                  {item.isVegetarian ? 'Vegetarian' : 'Non-Veg'}
                </span>
              </div>
              <AddToCart item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;