import React from 'react';
import { FaSprayCan,  FaShoppingBag, FaHandHoldingHeart, FaUserAlt } from 'react-icons/fa';
import '../ProductSections.css'; // Import the CSS file for styling

const ProductSections = () => {
  return (
   
    <div className="product-sections">
      <div className="section">
        <FaSprayCan className="section-icon" />
        <h2>Perfume</h2>
        <p>A world of new and classic scents to enjoy.</p>
      </div>
      <div className="section">
        < FaShoppingBag className="section-icon" />
        <h2>Makeup</h2>
        <p>Everything you need to discover your best version.</p>
      </div>
      <div className="section">
        <FaHandHoldingHeart className="section-icon" />
        <h2>Treatment</h2>
        <p>The best products to look and feel your best.</p>
      </div>
      <div className="section">
        <FaUserAlt className="section-icon" />
        <h2>Personal Care</h2>
        <p>A personal space, because time is yours.</p>
      </div>
    </div>
   
  );
};

export default ProductSections;
