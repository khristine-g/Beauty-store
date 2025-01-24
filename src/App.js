import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Category from './components/Category';
import CategoryProducts from './components/CategoryProducts';
import ProductList from './components/ProductList';
import TrendingProducts from './components/TrendingProducts';
import { SearchProvider } from './components/SearchContext';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import ProductInfo from './components/ProductInfo';
import useScrollAnimation from './components/useScrollAnimation';
import AllProducts from './components/AllProducts';
import OrderConfirmation from './components/OrderConfirmation';
import SearchModal from './components/SearchModal'; // Import SearchModal

import './App.css';

const categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Clothing' },
  { id: 3, name: 'Furniture' },
];

function App() {
  useScrollAnimation();
  
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  const handleSelectCategory = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
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

  const handleSearch = (searchTerm) => {
    // Call a function to filter products based on search input
    // This function can fetch products from an API or filter from existing data
    // For now, I'm using the `handleSearchResults` to filter products based on search term.
    const filteredProducts = []; // Replace with your actual search filtering logic
    setSearchResults(filteredProducts);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SearchProvider>
      <Router>
        <div className="App">
          {/* Navbar Component */}
          <Navbar onSearch={handleSearchResults} openModal={() => setIsModalOpen(true)} />
          
          {/* Conditionally render SearchModal */}
          {isModalOpen && (
            <SearchModal 
              searchInput={searchInput} 
              setSearchInput={setSearchInput} 
              handleSearch={handleSearch} 
              closeModal={closeModal}
              setCart={setCart}  // Pass setCart here
            />
          )}

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
