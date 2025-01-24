import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../TrendingProducts.css';
import { groups, items } from './Data2.js';

const TrendingProducts = ({ setCart }) => {
  const [activeGroup, setActiveGroup] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredItems = items
    .filter(
      (item) =>
        activeGroup === 'All' ||
        item.categoryId === groups.find((group) => group.name === activeGroup)?.id
    )
    .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleProductClick = (product) => {
    navigate('/product-info', { state: { product } });
  };

  const handleQuickAdd = (product) => {
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
  };

  return (
    <div className="animate-on-scroll trending-products">
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

      {/* Group Links */}
      <div className="group-links">
        <Link
          to="#"
          className={`group-link ${activeGroup === 'All' ? 'active' : ''}`}
          onClick={() => setActiveGroup('All')}
        >
          All
        </Link>
        {groups.map((group) => (
          <Link
            to="#"
            key={group.id}
            className={`group-link ${activeGroup === group.name ? 'active' : ''}`}
            onClick={() => setActiveGroup(group.name)}
          >
            {group.name}
          </Link>
        ))}
      </div>

      {/* Products */}
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
                  e.stopPropagation();
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
  );
};

export default TrendingProducts;
