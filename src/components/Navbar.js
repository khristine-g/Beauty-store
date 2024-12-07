import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes,  FaShoppingBag } from 'react-icons/fa'; // Import icons
import '../Navbar.css';

const Navbar = ({ onSearch }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State for toggle menu
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = async (e) => {
        e.preventDefault();

        // Make a GET request to the Rails backend using fetch
        try {
            const response = await fetch(`http://localhost:3000/products/search?search=${encodeURIComponent(searchInput)}`);

            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }

            const data = await response.json();
            onSearch(data); // Pass the search results to the parent component
            setSearchInput(''); // Clear the input after search
            setMenuOpen(false); // Close the menu after searching
        } catch (error) {
            console.error('Error fetching search results:', error);
            alert('Error fetching search results. Please try again.');
        }
    };

    const handleToggle = () => {
        setMenuOpen(!menuOpen); // Toggle the menu
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
