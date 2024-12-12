import React from 'react';
import { Link } from 'react-router-dom';
import '../Shop.css';

function Shop() {
  return (
    <div className="animate-on-scroll">

    <div className="shop-container">
      <div className="shop-image-wrapper">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*bJVKX3YQMQmdSGzn"
          alt="Beauty Products"
          className="shop-image"
        />
        <div className="shop-content">
          <h3 className="shop-title">BRING OUT THE HIDDEN BEAUTY</h3>
          <p className="shop-description">
            Get styled with the high-fashion products and transform yourself.
          </p>
          <Link className="shop-link" to="/all-products">
            SHOP ALL PRODUCTS
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Shop;

