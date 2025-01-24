import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import Navbar from './components/Navbar';
import Category from './components/Category';
import CategoryProducts from "./components/CategoryProducts";
import ProductList from './components/ProductList';
import TrendingProducts from './components/TrendingProducts';
import { SearchProvider } from "./components/SearchContext";

import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import ProductInfo from './components/ProductInfo';
import useScrollAnimation from './components/useScrollAnimation';
import AllProducts from './components/AllProducts';
import OrderConfirmation from './components/OrderConfirmation';

import './App.css';

// Example category data (replace with actual data)
const categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Clothing' },
  { id: 3, name: 'Furniture' },
  // Add more categories as needed
];

function App() {
  useScrollAnimation(); 
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);


  const handleSelectCategory = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId); // Ensure categories are accessible
    setSelectedCategory(category);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map(product =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleSearchResults = (filteredProducts) => {
    setSearchResults(filteredProducts); // Store filtered products in state
  };

  return (
    <SearchProvider>
      <Router>
      
        
        <div className="App">
       
          {/* Navbar Component */}
          <Navbar onSearch={handleSearchResults} />
            
          
          {/* Search Results Section: Display results at the top of the page */}
          <div className="search-results">
            {searchResults.length > 0 ? (
              searchResults.map((product) => (
                <div key={product.id} className="product-item">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <p>{product.price}</p>
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>

          {/* Main Content */}
          <Routes>
            <Route path="/" element={<Home onSelectCategory={handleSelectCategory} />} />
            <Route path="/products" element={<ProductList selectedCategory={selectedCategory} cart={cart} setCart={setCart} removeFromCart={removeFromCart} searchResults={searchResults} />} />
            <Route path="/categories" element={<Category onSelectCategory={handleSelectCategory} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={removeFromCart} onUpdateQuantity={handleUpdateQuantity} />} />
            <Route path="/products/:categoryId" element={<CategoryProducts />} />
            <Route path="/product-info" element={<ProductInfo setCart={setCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/trending-products" element={<TrendingProducts setCart={setCart} />} />
          </Routes>
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;
