import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/OrderConfirmation.css';

function OrderConfirmation() {
  const navigate = useNavigate();
  const { cartItems, getCartTotal } = useCart();

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <div className="success-icon">✓</div>
        <h2>Order Confirmed!</h2>
        <p>Your order has been successfully placed.</p>
        
        <div className="order-details">
          <h3>Order Summary</h3>
          {cartItems.map(item => (
            <div key={item.id} className="confirmation-item">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="confirmation-total">
            <strong>Total Paid:</strong>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
        </div>

        <button 
          className="back-to-menu" 
          onClick={() => navigate('/menu')}
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation;