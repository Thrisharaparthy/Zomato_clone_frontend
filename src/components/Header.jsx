import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">FoodHub</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#recipes">Recipes</a></li>
          <li><a href="#booking">Book a Table</a></li>
          <li><a href="#feedback">Feedback</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;