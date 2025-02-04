import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./Data.js";
import "../ProductList.css";

const ProductList = ({ selectedCategory, setCart }) => {
  const navigate = useNavigate();

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categoryId === selectedCategory.id)
    : products;

  // Only show the first 12 products
  const productsToDisplay = filteredProducts.slice(0, 12);

  const handleProductClick = (product) => {
    navigate("/product-info", { state: { product } });
  };

  const handleQuickAdd = (product, e) => {
    e.stopPropagation(); // Prevent navigation when clicking Quick Add

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
      setCart(parsedCart);
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const handleViewAll = () => {
    navigate("/all-products");
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">
        {selectedCategory
          ? `Products in ${selectedCategory.name} Category`
          : "All Products"}
      </h2>
      <p className="product-subtext">
        The World's Premium Brands In One Destination. Find the best deals here!
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
                <p className="product-price">Ksh {product.price.toFixed(2)}</p>
                <button
                  className="product-list-quick-add-btn"
                  onClick={(e) => handleQuickAdd(product, e)}
                >
                  Quick Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      <div className="view-all-button-container">
        <button className="view-all-button" onClick={handleViewAll}>
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductList;
