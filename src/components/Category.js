import React from "react";
import { useNavigate } from "react-router-dom";
import "../Category.css";
import { categories } from "./Data"; // Assuming you have a categories data file

const Category = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCategoryClick = (category) => {
    navigate(`/products/${category.id}`); // Navigate to the Product page for the selected category
  };

  return (
    <div className="animate-on-scroll">
      <div className="category-container">
        <h2 className="category-title">Explore Categories</h2>
        <p className="category-subheader">
          Explore the finest selection from premium brands worldwide.
        </p>

        {/* Buttons for categories */}
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category.id}
              className="category-button"
              onClick={() => handleCategoryClick(category)} // Handle category click
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid of category images */}
        <div className="category-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category)} // Handle category image click
            >
             
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
              <p className="category-name">{category.name}</p> 
                  
             
            </div>
            
          ))}
     
        </div>
      </div>
    </div>
  );
};

export default Category;
