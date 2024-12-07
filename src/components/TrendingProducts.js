import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TrendingProducts.css'; // Reuse the same CSS as ProductList

function TrendingProducts({ cart, setCart, removeFromCart }) {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const response = await fetch('https://beautygalore-e2698a7e3042.herokuapp.com/trending');
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

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : trendingProducts.length - 4;
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
    <div className="animate-on-scroll">
    <div className='TrendingProducts'>
      <div>
        <h2 className='trending-product-header'>TRENDING PRODUCTS</h2>
        <p>The Most Popular Products This Season.</p>

        {/* Category buttons */}
        <div className="category-buttons">
          <button className="category-btn dark">Face</button>
          <button className="category-btn">Lips</button>
          <button className="category-btn">Eyes</button>
          <button className="category-btn">Skin</button>
        </div>

        <div className="carousel-container">
          <button className="trending-prev-btn" onClick={handlePrev}>&lt;</button>
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {trendingProducts.map((product) => (
                <div
                  key={product.id}
                  className="trending-product-card"
                  onClick={() => handleSelectProduct(product.id)}
                >
                  <div className="trending-product-img-card">
                    <img className="trending-product-img" src={product.image} alt={product.name} />
                  </div>
                  <div className="trending-product-details">
                    <h4 className="trending-product-name">{product.name}</h4>
                    <p className="price">${product.price}</p>
                    <div className="trending-product-rating">
                      {[...Array(5)].map((_, index) => (
                        <span key={index} className="star">&#9733;</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="trending-next-btn" onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default TrendingProducts;
