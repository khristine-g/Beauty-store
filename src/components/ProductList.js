import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./Data.js"; // Ensure this is the correct path for your data
import "../ProductList.css";

const ProductList = ({ selectedCategory, setCart }) => {
  const navigate = useNavigate();

  // Filter products based on selected category or show all products if no category is selected
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory.id)
    : products; // Show all products if no category is selected

  // Only show the first 12 products
  const productsToDisplay = filteredProducts.slice(0, 12);

  const handleProductClick = (product) => {
    // Navigate to the ProductInfo component with the selected product as state
    navigate("/product-info", { state: { product } });
  };

  const handleQuickAdd = (product) => {
    try {
      const storedCart = localStorage.getItem("cart");
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];

      const existingProductIndex = parsedCart.findIndex(
        (cartProduct) => cartProduct.id === product.id
      );

      if (existingProductIndex !== -1) {
        parsedCart[existingProductIndex].quantity += 1;
      } else {
        parsedCart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(parsedCart));
      setCart(parsedCart); // Update cart state
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const handleViewAll = () => {
    navigate("/all-products"); // Navigate to the full products page
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">
        {selectedCategory
          ? `Products in ${selectedCategory.name} Category`
          : "All Products"}
      </h2>
      <p className="product-subtext">
        The World's Premium Brands In One Destination.
      </p>
      <div className="products-container">
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button
                  className="product-list-quick-add-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigating to product details
                    handleQuickAdd(product);
                  }}
                >
                  Quick Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>

      {/* View All button */}
      <div className="view-all-button-container">
        <button className="view-all-button" onClick={handleViewAll}>
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductList;