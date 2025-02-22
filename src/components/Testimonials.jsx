import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/images/customer1.jpg",
      rating: 5,
      review: "Amazing food and excellent service! The butter chicken was absolutely delicious.",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Mike Wilson",
      image: "/images/customer2.jpg",
      rating: 5,
      review: "Best pizza in town! Quick delivery and always hot and fresh.",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Emily Davis",
      image: "/images/customer3.jpg",
      rating: 4,
      review: "Great variety of dishes. The family pack was perfect for our Sunday dinner.",
      date: "3 days ago"
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {reviews.map(review => (
          <div key={review.id} className="testimonial-card">
            <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
            <div className="customer-info">
              <img src={review.image} alt={review.name} />
              <h3>{review.name}</h3>
              <div className="rating">
                {[...Array(review.rating)].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} />
                ))}
              </div>
            </div>
            <p className="review-text">{review.review}</p>
            <span className="review-date">{review.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;