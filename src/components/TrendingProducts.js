import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TrendingProducts.css';
import { groups, items } from './Data2.js';

const TrendingProducts = () => {
  const [activeGroup, setActiveGroup] = useState('All');
  const navigate = useNavigate();

  // Filter items based on active group
  const filteredItems =
    activeGroup === 'All'
      ? items
      : items.filter((item) => item.categoryId === groups.find((group) => group.name === activeGroup)?.id);

  const handleProductClick = (product) => {
    console.log('Navigating with product:', product);
    navigate('/product-info', { state: { product } });
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
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TrendingProducts;
