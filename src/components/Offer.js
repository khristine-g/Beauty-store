import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';  // Import Bootstrap Modal and Button
import '../Offer.css'; // Import styles

function Offer({ setCart }) {
  const product = {
    id: 1,  // Add a unique ID to the product
    name: 'Home Lights Scented Candle',
    image: 'https://i.ebayimg.com/images/g/MfAAAOSwfdxm7QYK/s-l1200.jpg',
    description: 'Transform your space into a haven of tranquility with our Osmanthus & Amber Scented Candle. Hand-poured with care, this candle is crafted from eco-friendly soy wax and infused with a blend of soothing lavender, warm vanilla, and hints of fresh eucalyptus. The delicate fragrance fills the room with a calming ambiance, perfect for unwinding after a long day or setting the mood for cozy evenings. With its clean burn and minimalist design, this candle not only soothes your senses but also enhances your décor. Light up Serenity and let its gentle glow and comforting aroma bring peace to your world.',
    previousPrice: 35.99,
    newPrice: 27.99,
  };

  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    try {
      // Ensure `product.newPrice` is a valid number before using it
      if (isNaN(product.newPrice)) {
        throw new Error('Invalid product price');
      }
  
      // Retrieve cart from localStorage
      const storedCart = localStorage.getItem('cart');
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];
  
      // Check if product is already in cart and update quantity
      const existingProductIndex = parsedCart.findIndex(cartProduct => cartProduct.id === product.id);
      if (existingProductIndex !== -1) {
        parsedCart[existingProductIndex].quantity += 1;
      } else {
        parsedCart.push({ ...product, quantity: 1 });
      }
  
      // Store updated cart in localStorage
      localStorage.setItem('cart', JSON.stringify(parsedCart));
  
      // Update cart in parent component
      setCart(parsedCart);
  
      // Show success modal
      setShowModal(true);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };
  
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="offer-container">
      <div className="offer-card">
        {/* Product Image */}
        <img className="offer-image" src={product.image} alt={product.name} />

        {/* Product Details */}
        <div className="offer-details">
          <h2 className="offer-title">{product.name}</h2>
          <p className="offer-description">{product.description}</p>
          <div className="offer-prices">
            <span className="offer-previous-price">${product.previousPrice.toFixed(2)}</span>
            <span className="offer-new-price">${product.newPrice.toFixed(2)}</span>
          </div>
          <button className="offer-add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
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

export default Offer;
