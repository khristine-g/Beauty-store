import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./Data.js"; // Ensure this is the correct path for your data
import "../ProductList.css";

const ProductList = ({ selectedCategory }) => {
  const navigate = useNavigate();

  // Filter products based on selected category or show all products if no category is selected
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory.id)
    : products;  // Show all products if no category is selected

  const handleProductClick = (product) => {
    // Navigate to the ProductInfo component with the selected product as state
    navigate('/product-info', { state: { product } });
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">
        {selectedCategory ? `Products in ${selectedCategory.name} Category` : "All Products"}
      </h2>
      <p className="product-subtext">
        The World's Premium Brands In One Destination.
      </p>
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;