import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { products } from "./Data.js";
import { SearchContext } from "./SearchContext";
import "../Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { setSearchResults } = useContext(SearchContext);

  const handleSearch = (query) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

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
      <div className="beauty-navbar-brand">TRUE BEAUTY</div>

      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        </li>
        <li>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            <FaShoppingCart className="cart-icon" />
          </Link>
        </li>
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
