import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <button onClick={() => navigate('/menu')} className="continue-shopping">
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-info">
                    <div className="item-header">
                      <h3>{item.name}</h3>
                      <span className="item-price">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <button 
                        className="remove-button"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-details">
                <div className="subtotal">
                  <span>Subtotal:</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="total">
                  <span>Total:</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
              
              <div className="cart-actions">
                <button 
                  className="checkout-button"
                  onClick={() => navigate('/checkout')}
                >
                  Proceed to Checkout
                </button>
                <button 
                  className="continue-button"
                  onClick={() => navigate('/menu')}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;