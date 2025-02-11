import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { products } from "./Data.js"; 
import "../SearchModal.css";

const SearchModal = ({ closeModal }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  const handleSearch = (query) => {
    setSearchInput(query);
    if (query.trim() === "") {
      setFilteredProducts([]);
    } else {
      const results = products.filter(
        (product) =>
          product.name && product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    }
  };

  // Function to navigate to ProductInfo when a product is clicked
  const handleProductClick = (product) => {
    navigate("/product-info", { state: { product } });
    closeModal(); // Close the search modal after navigating
  };

  return (
    <div className="search-modal">
      <div className="search-modal-content">
        <FaTimes className="close-icon" onClick={closeModal} />

        {/* Search Input */}
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
        />

        {/* Display Search Results */}
        {filteredProducts.length > 0 ? (
          <div className="search-results">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="search-product-card" 
                onClick={() => handleProductClick(product)} // Navigate on click
              >
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Ksh {product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          searchInput && <p className="no-results">No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
