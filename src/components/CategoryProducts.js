import React from "react";
import { useParams } from "react-router-dom";  // Import useParams to access URL params
import { categories } from "./Data";  // Assuming categories data is in Data.js
import ProductList from "./ProductList";  // Assuming you have a ProductList component

const CategoryProducts = () => {
  const { categoryId } = useParams();  // Get the category ID from the URL
  const category = categories.find(cat => cat.id === parseInt(categoryId));

  if (!category) {
    return <p>Category not found</p>;
  }

  return (
    <div>
      <h2>{category.name} Products</h2>
      <ProductList selectedCategory={category} />
    </div>
  );
};

export default CategoryProducts;
