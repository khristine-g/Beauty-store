import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TrendingProducts.css';
import { groups, items } from './Data2.js';

const TrendingProducts = ({ setCart }) => {
  const [activeGroup, setActiveGroup] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Filter items based on active group and search term
  const filteredItems = items
    .filter((item) => 
      (activeGroup === 'All' || item.categoryId === groups.find((group) => group.name === activeGroup)?.id)
    )
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleProductClick = (product) => {
    navigate('/product-info', { state: { product } });
  };

  const handleQuickAdd = (product) => {
    try {
      // Retrieve and parse the stored cart
      const storedCart = localStorage.getItem('cart');
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];
  
      // Check if the product already exists in the cart
      const existingProductIndex = parsedCart.findIndex(
        (cartProduct) => cartProduct.id === product.id
      );
  
      if (existingProductIndex !== -1) {
        // Update the quantity if it exists
        parsedCart[existingProductIndex].quantity += 1;
      } else {
        // Add the product if it doesn't exist
        parsedCart.push({ ...product, quantity: 1 });
      }
  
      // Update localStorage
      localStorage.setItem('cart', JSON.stringify(parsedCart));
  
      // Update the cart state
      setCart(parsedCart);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  return (
    <div className="animate-on-scroll">
      <div className="trending-products">
        <h1 className="title">Trending Products</h1>
        
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="group-buttons">
          <button
            className={`group-button ${activeGroup === 'All' ? 'active' : ''}`}
            onClick={() => setActiveGroup('All')}
          >
            All
          </button>
          {groups.map((group) => (
            <button
              key={group.id}
              className={`group-button ${activeGroup === group.name ? 'active' : ''}`}
              onClick={() => setActiveGroup(group.name)}
            >
              {group.name}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {filteredItems.map((item) => (
            <div
              className="product-card"
              key={item.id}
              onClick={() => handleProductClick(item)}
            >
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-details">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-price">ksh {item.price.toFixed(2)}</p>
                <button
                  className="quick-add-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigating to product details
                    handleQuickAdd(item);
                  }}
                >
                  Quick Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
