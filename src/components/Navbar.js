import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes, FaShoppingBag } from 'react-icons/fa'; // Import icons
import { products } from './Data.js'; // Import products from data.js
import { items } from './Data2.js'; // Import additional products from data2.js
import '../Navbar.css';

const Navbar = ({ onSearch }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State for toggle menu
    const [searchInput, setSearchInput] = useState('');

    // Handle search input change
    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    // Handle search and filter products locally
    const handleSearch = (e) => {
        e.preventDefault();
        
        // Combine the two product arrays
        const allProducts = [...products, ...items];

        // Filter products by name
        const filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchInput.toLowerCase())
        );

        // Pass the filtered products to the parent component
        onSearch(filteredProducts);

        setSearchInput(''); // Clear the input after search
        setMenuOpen(false); // Close the menu after searching
    };

    // Handle scroll and navbar styling
    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle mobile menu toggle
    const handleToggle = () => {
        setMenuOpen(!menuOpen); // Toggle the menu
    };

    return (
        <nav className={`beauty-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="beauty-navbar-brand">
                <FaShoppingBag /> {/* Logo Icon */}
                TRUE BEAUTY
            </div>

            {/* Hamburger Menu Icon for mobile */}
            <div className="navbar-toggle" onClick={handleToggle}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Menu Links - Toggled based on menuOpen state */}
            <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
                <li><Link to="/cart" onClick={() => setMenuOpen(false)}>CART</Link></li>
                <li><Link to="/signup" onClick={() => setMenuOpen(false)}>SIGNUP</Link></li>
                <li><Link to="/login" onClick={() => setMenuOpen(false)}>LOGIN</Link></li>
            </ul>

            {/* Search Form */}
            <form className="search-form" onSubmit={handleSearch}>
                <div className="search-container">
                    <input
                        className="search-input"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchInput}
                        onChange={handleInputChange}
                    />
                    <FaSearch className="search-icon" onClick={handleSearch} />
                </div>
            </form>
        </nav>
    );
};

export default Navbar;
