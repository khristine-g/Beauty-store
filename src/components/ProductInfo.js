import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';  // Import Bootstrap Modal and Button
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import '../ProductInfo.css';

function ProductInfo({ setCart }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};  // Access the product from the state

  const [showModal, setShowModal] = useState(false);

  if (!product) {
    return <p>Please select a product to view details.</p>;
  }

  const handleAddToCart = () => {
    try {
      // Retrieve the cart from localStorage
      const storedCart = localStorage.getItem('cart');
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];
      
      // Check if the product is already in the cart
      const existingProductIndex = parsedCart.findIndex((cartProduct) => cartProduct.id === product.id);

      // If the product exists, increase the quantity, otherwise add it to the cart
      if (existingProductIndex !== -1) {
        parsedCart[existingProductIndex].quantity += 1;
      } else {
        parsedCart.push({ ...product, quantity: 1 });
      }

      // Store the updated cart in localStorage
      localStorage.setItem('cart', JSON.stringify(parsedCart));

      // Update the cart in the parent component (if passed as prop)
      setCart(parsedCart);  

      // Show the success modal
      setShowModal(true);
    } catch (error) {
      console.error('Error parsing or updating cart:', error);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="product-info">
      {/* Product Image */}
      <div className="card">
        <img className="product-img" src={product.image} alt={product.name} />
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h2 className="card-title">{product.name}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <button className="cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="info-back-btn" onClick={() => navigate(-1)}>
          &lt; Back
        </button>
      </div>

      {/* Success Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <span style={{ fontSize: '24px', color: 'green' }}>✔️</span>
            <p>Product added to cart successfully!</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductInfo;

