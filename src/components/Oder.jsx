import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Order.css';

function Order() {
  const { cartItems, getCartTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="order-container">
      <h2>Your Order</h2>
      <div className="order-items">
        {cartItems.map(item => (
          <div key={item.id} className="order-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <div className="total">
          <span>Total:</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>
        <button className="checkout-button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Order;