import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { products } from "./Data.js"; // Adjust the path to your data file
import { SearchContext } from "./SearchContext";
import "../Navbar.css"; // Adjust the path to your CSS file

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { setSearchResults } = useContext(SearchContext);

  // Filter products based on search input
  const handleSearch = (query) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  // Handle scroll to add background on navbar
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`beauty-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      {/* Hamburger menu for mobile */}
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className="beauty-navbar-brand">TRUE BEAUTY</div>

      {/* Navbar links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            CART
          </Link>
        </li>
        <li>
          <Link to="/signup" onClick={() => setMenuOpen(false)}>
            SIGNUP
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            LOGIN
          </Link>
        </li>
        {/* Search bar */}
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                handleSearch(e.target.value);
              }}
            />
            <FaSearch className="search-icon" />
          </div>
        </form>
      </ul>
    </nav>
  );
};

export default Navbar;
