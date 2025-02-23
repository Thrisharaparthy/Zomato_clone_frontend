// ... existing imports ...
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ isOpen, onClose }) => {
  // ... existing state and functions ...

  const [feedback, setFeedback] = useState({
    rating: 0,
    comment: ''
  });

  const handleRating = (rating) => {
    setFeedback(prev => ({ ...prev, rating }));
  };

  const handleComment = (e) => {
    setFeedback(prev => ({ ...prev, comment: e.target.value }));
  };

  const submitFeedback = () => {
    if (feedback.rating === 0) {
      alert('Please select a rating');
      return;
    }
    console.log('Feedback submitted:', feedback);
    setFeedback({ rating: 0, comment: '' });
  };

  return (
    <div className={`cart-sidebar ${isOpen ? 'active' : ''}`}>
      {/* ... existing cart header and items ... */}

      <div className="cart-footer">
        <div className="total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button 
          className="checkout-btn"
          onClick={handleCheckout}
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>

        <div className="feedback-section">
          <h3>Rate Your Experience</h3>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`star-btn ${star <= feedback.rating ? 'active' : ''}`}
                onClick={() => handleRating(star)}
              >
                <FontAwesomeIcon icon={faStar} />
              </button>
            ))}
          </div>
          <textarea
            placeholder="Leave your feedback (optional)"
            value={feedback.comment}
            onChange={handleComment}
            className="feedback-input"
          />
          <button 
            className="submit-feedback-btn"
            onClick={submitFeedback}
            disabled={feedback.rating === 0}
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;