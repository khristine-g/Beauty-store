import { SearchContext } from './SearchContext'; // Adjust the path based on your folder structure
import React, { useContext,useState } from 'react';
import { Modal, Button } from 'react-bootstrap';  // Import Bootstrap Modal and Button
import "../SearchModal.css";

const SearchModal = ({ searchInput, setSearchInput, handleSearch, closeModal, setCart }) => {

  // Add to Cart function
  const handleAddToCart = (product) => {
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

      // Optionally, you can show a modal or toast indicating success (like in the ProductInfo component)
    } catch (error) {
      console.error('Error parsing or updating cart:', error);
    }
  };

  return (
    <div className="search-modal">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="Search for products..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            handleSearch(e.target.value);
          }}
        />
        <div className="search-results">
          {/* Assuming products are displayed in context */}
          <SearchResults handleAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};


const SearchResults = ({ handleAddToCart }) => {
  const { searchResults } = useContext(SearchContext);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      {searchResults.map((product) => (
        <div key={product.id} className="result-item">
          <img src={product.image} alt={product.name} />
          <div className="result-details">
            <h3>{product.name}</h3>
            <p>Ksh {product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
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
};

export default SearchModal;
