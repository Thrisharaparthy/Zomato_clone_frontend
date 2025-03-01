import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/AddToCart.css';

function AddToCart({ item }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <button className="add-to-cart-btn" onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
}

export default AddToCart;