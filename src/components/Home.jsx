import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Food Zone</h1>
        <p>Discover delicious meals from around the world</p>
        <Link to="/menu" className="explore-button">
          Explore Menu <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>

      <div className="featured-categories">
        <h2>Popular Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="/images/butter-chicken.jpg" alt="Main Course" />
            <h3>Main Course</h3>
          </div>
          <div className="category-card">
            <img src="/images/burger.jpg" alt="Fast Food" />
            <h3>Fast Food</h3>
          </div>
          <div className="category-card">
            <img src="/images/pasta.jpg" alt="Italian" />
            <h3>Italian</h3>
          </div>
          <div className="category-card">
            <img src="/images/sushi.jpg" alt="Japanese" />
            <h3>Japanese</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;