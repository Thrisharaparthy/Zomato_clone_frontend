import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Order placed:', formData);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-section">
          <h3>Delivery Information</h3>
          <div className="input-group">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="input-group">
            <div className="input-with-icon">
              <FontAwesomeIcon icon={faPhone} />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
            <div className="input-with-icon">
              <FontAwesomeIcon icon={faLocationDot} />
              <input
                type="text"
                placeholder="Delivery Address"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Payment Details</h3>
          <div className="input-with-icon">
            <FontAwesomeIcon icon={faCreditCard} />
            <input
              type="text"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={(e) => setFormData({...formData, expiry: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="CVV"
              value={formData.cvv}
              onChange={(e) => setFormData({...formData, cvv: e.target.value})}
              required
            />
          </div>
        </div>

        <button type="submit" className="place-order-btn">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;