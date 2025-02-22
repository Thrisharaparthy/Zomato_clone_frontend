import React, { useState } from 'react';
import '../styles/FeedbackSection.css';

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    rating: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
  };

  return (
    <section id="feedback" className="feedback-section">
      <h2>Customer Feedback</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={feedback.name}
          onChange={(e) => setFeedback({...feedback, name: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={feedback.email}
          onChange={(e) => setFeedback({...feedback, email: e.target.value})}
          required
        />
        <select
          value={feedback.rating}
          onChange={(e) => setFeedback({...feedback, rating: e.target.value})}
          required
        >
          <option value="">Rating</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>
        <textarea
          placeholder="Your feedback"
          value={feedback.message}
          onChange={(e) => setFeedback({...feedback, message: e.target.value})}
          required
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </section>
  );
};

export default FeedbackSection;