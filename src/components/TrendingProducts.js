import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TrendingProducts.css';
import { groups, items } from './Data2.js';

const TrendingProducts = ({ setCart }) => {
  const [activeGroup, setActiveGroup] = useState('All');
  const navigate = useNavigate();

  // Filter items based on active group
  const filteredItems =
    activeGroup === 'All'
      ? items
      : items.filter((item) => item.categoryId === groups.find((group) => group.name === activeGroup)?.id);

  const handleProductClick = (product) => {
    navigate('/product-info', { state: { product } });
  };

  const handleQuickAdd = (product) => {
    try {
      const storedCart = localStorage.getItem('cart');
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];

      const existingProductIndex = parsedCart.findIndex((cartProduct) => cartProduct.id === product.id);

      if (existingProductIndex !== -1) {
        parsedCart[existingProductIndex].quantity += 1;
      } else {
        parsedCart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(parsedCart));
      setCart(parsedCart);
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  return (
    <div className="animate-on-scroll">
      <div className="trending-products">
        <h1 className="title">Trending Products</h1>
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
                <p className="product-price">${item.price.toFixed(2)}</p>
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
