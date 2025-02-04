import React, { useState } from 'react';
import { Carousel, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import '../Offer.css';
import candleImage1 from '../images/candle3.jpg';
import candleImage2 from '../images/perfume6.jpg';
import candleImage3 from '../images/diffuser.jpeg';

function Offer({ setCart }) {
  const products = [
    {
      id: 1,
      name: 'Lalique Scented Candle',
      image: candleImage1,
      description:
        'A refined blend of the aromatic fruitiness of plum with bittersweet notes of Amaretto, floral jasmine accords and relaxing exotic iris accents.',
      previousPrice: 35.99,
      newPrice: 27.99,
    },
    {
      id: 2,
      name: 'Flower Bomb Perfume',
      image: candleImage2,
      description:
        'This modern classic truly has a bit of everything: Juicy blood orange and mandarin, fresh lily of the valley, and earthy patchouli combine for a timeless scent.',
      previousPrice: 29.99,
      newPrice: 22.99,
    },
    {
      id: 3,
      name: 'Jo Malone Diffuser',
      image: candleImage3,
      description:
        'Immerse yourself in the comforting aroma of vanilla bean with this hand-poured candle. Perfect for cozy nights or gifting.',
      previousPrice: 25.99,
      newPrice: 19.99,
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = (product) => {
    const storedCart = localStorage.getItem('cart');
    const parsedCart = storedCart ? JSON.parse(storedCart) : [];
    const existingProductIndex = parsedCart.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      parsedCart[existingProductIndex].quantity += 1;
    } else {
      parsedCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(parsedCart));
    setCart(parsedCart);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="animate-on-scroll">
    
    <div className="offer-container">
      <h1 className="offer-title">Exclusive Offers</h1>
      <Carousel
        interval={2000}
        pause="hover"
        fade
        className="offer-carousel"
        indicators={false}
        controls={true}
      >
        {products.map((product) => (
          <Carousel.Item key={product.id} className="carousel-item">
            <div className="offer-slide">
              <img
                className="offer-image"
                src={product.image}
                alt={product.name}
              />
              <div className="offer-details">
                <h2 className="offer-item-title">{product.name}</h2>
                <p className="offer-description">{product.description}</p>
                <div className="offer-prices">
                  <span className="offer-previous-price">
                    ${product.previousPrice.toFixed(2)}
                  </span>
                  <span className="offer-new-price">
                    ${product.newPrice.toFixed(2)}
                  </span>
                </div>
                <button
                  className="offer-add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

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
     </div>
  );
}

export default Offer;
