import React from 'react';
import '../styles/Categories.css';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Pizza', icon: '🍕', count: '15+ Items' },
    { id: 2, name: 'Burgers', icon: '🍔', count: '10+ Items' },
    { id: 3, name: 'Sushi', icon: '🍱', count: '12+ Items' },
    { id: 4, name: 'Indian', icon: '🍛', count: '20+ Items' },
    { id: 5, name: 'Desserts', icon: '🍰', count: '8+ Items' },
    { id: 6, name: 'Drinks', icon: '🍹', count: '15+ Items' }
  ];

  return (
    <section className="categories">
      <h2>Featured Categories</h2>
      <div className="categories-grid">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <span className="category-icon">{category.icon}</span>
            <h3>{category.name}</h3>
            <p>{category.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;