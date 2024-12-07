import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../AllProducts.css';

function AllProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://beauty-galore.onrender.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSelectProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    navigate('/product-info', { state: { product } });
  };

  return (
    <div className='all-product-list'>
      <h2 className='all-product-header'>ALL PRODUCTS</h2>
      <div className="all-product-grid">
        {products.map((product) => (
          <div key={product.id} className="all-product-container">
            <div className="all-product-card" onClick={() => handleSelectProduct(product.id)}>
              <div className="all-product-img-card">
                <img className="all-product-img" src={product.image} alt={product.name} />
              </div>
            </div>
            <div className="all-product-details">
              <h4 className="all-product-name">{product.name}</h4>
              <p className="all-product-price">${product.price}</p>
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
  );
}

export default AllProducts;
