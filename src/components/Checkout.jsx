import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Checkout.css';

function Checkout() {
  const { cartItems, getCartTotal } = useCart();
  const navigate = useNavigate();
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/order-confirmation');
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h2>Checkout</h2>
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        {cartItems.map(item => (
          <div key={item.id} className="checkout-item">
            <span>{item.name} × {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="total">
          <span>Total</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="payment-form">
        <h3>Payment Details</h3>
        <div className="form-group">
          <label>Card Holder Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter card holder's name"
            required
          />
        </div>
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            maxLength="16"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              maxLength="5"
              required
            />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="text"
              name="cvv"
              placeholder="123"
              maxLength="3"
              required
            />
          </div>
        </div>
        <button type="submit" className="pay-button">
          Pay ${getCartTotal().toFixed(2)}
        </button>
      </form>
    </div>
  );
}

export default Checkout;