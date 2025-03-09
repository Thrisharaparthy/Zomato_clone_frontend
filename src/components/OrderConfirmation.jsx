import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/OrderConfirmation.css';

function OrderConfirmation() {
  return (
    <div className="order-confirmation">
      <div className="confirmation-icon">✓</div>
      <h2 className="confirmation-title">Order Confirmed!</h2>
      <p>Your order has been successfully placed.</p>
      
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-item">
          <span>Classic Burger</span>
          <span>$12.99</span>
        </div>
        <div className="summary-item">
          <span>Total Price:</span>
          <span>$12.99</span>
        </div>
      </div>

      <Link to="/" className="back-to-home">
        Back to Home
      </Link>
    </div>
  );
}

export default OrderConfirmation;