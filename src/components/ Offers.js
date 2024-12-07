import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ProductList.css'; // Reuse the same CSS as ProductList

function TrendingProducts({ cart, setCart, removeFromCart }) {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/offers');
        const data = await response.json();
        setTrendingProducts(data);
      } catch (error) {
        console.error('Error fetching trending products:', error);
      }
    };

    fetchTrendingProducts();
  }, []);

  const handleSelectProduct = (productId) => {
    const product = trendingProducts.find((product) => product.id === productId);
    navigate('/product-info', { state: { product } });
  };

  

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex < trendingProducts.length - 4 ? prevIndex + 1 : 0;
      return newIndex;
    });
  }, [trendingProducts.length]);

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [handleNext]);

  return (
    <div className='OfferList'>
      <div>
        <h2 className='product-header'>CURRENTLY ON OFFER</h2>
        <p>Grab our exclusive offers while they last.</p>

        <div className="carousel-container">
     
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {trendingProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => handleSelectProduct(product.id)}
                >
                  <div className="product-img-card">
                    <img className="product-img" src={product.image} alt={product.name} />
                  </div>
                  <div className="product-details">
                    <h4 className="product-name">{product.name}</h4>
                    <p className="price">${product.price}</p>
                    <div className="product-rating">
                      {[...Array(5)].map((_, index) => (
                        <span key={index} className="star">&#9733;</span>
                      ))}
                    </div>
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
  
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;




