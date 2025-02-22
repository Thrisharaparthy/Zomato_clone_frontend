import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../styles/Cart.css';

const Cart = ({ isOpen, onClose }) => {
  const cartItems = [
    {
      id: 1,
      name: "Butter Chicken",
      price: 15.99,
      quantity: 2,
      image: "/images/recipe1.jpg"
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: 12.99,
      quantity: 1,
      image: "/images/recipe2.jpg"
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={`cart-sidebar ${isOpen ? 'active' : ''}`}>
      <div className="cart-header">
        <h2>
          <FontAwesomeIcon icon={faShoppingCart} /> Your Cart
        </h2>
        <button className="close-cart" onClick={onClose}>&times;</button>
      </div>

      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              <div className="quantity-controls">
                <button>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{item.quantity}</span>
                <button>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
            <button className="remove-item">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;