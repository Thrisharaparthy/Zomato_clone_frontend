import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeGrid from './RecipeGrid';

function CategoryDetail({ menuItems }) {
  const { categoryName } = useParams();
  const formattedCategoryName = categoryName.replace('-', ' ').replace(/(^\w|\s\w)/g, l => l.toUpperCase());
  
  const filteredItems = menuItems.filter(item => 
    item.category.toLowerCase() === formattedCategoryName.toLowerCase()
  );

  return (
    <div className="category-detail">
      <h1>{formattedCategoryName}</h1>
      <RecipeGrid items={filteredItems} loading={false} error={null} />
    </div>
  );
}

export default CategoryDetail;