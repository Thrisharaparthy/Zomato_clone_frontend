import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Food Quality',
    'Service',
    'Value for Money',
    'Ambiance',
    'Cleanliness'
  ];

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }

    // Handle submission logic here
    console.log({
      rating,
      comment,
      categories: selectedCategories
    });

    setSubmitted(true);
    // Reset form
    setTimeout(() => {
      setRating(0);
      setComment('');
      setSelectedCategories([]);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h3 className="feedback-header">How was your experience?</h3>
      
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            type="button"
            key={star}
            className={`star-btn ${star <= rating ? 'active' : ''}`}
            onClick={() => setRating(star)}
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
        ))}
      </div>

      <div className="feedback-categories">
        {categories.map(category => (
          <button
            type="button"
            key={category}
            className={`category-btn ${selectedCategories.includes(category) ? 'selected' : ''}`}
            onClick={() => toggleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <textarea
        className="feedback-input"
        placeholder="Tell us more about your experience..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button 
        type="submit" 
        className="submit-feedback"
        disabled={rating === 0}
      >
        Submit Feedback
      </button>

      {submitted && (
        <p className="feedback-success">
          Thank you for your feedback!
        </p>
      )}
    </form>
  );
};

export default FeedbackForm;