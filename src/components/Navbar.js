import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import SearchModal from "./SearchModal"; // Import SearchModal
import "../Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav className="beauty-navbar">
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
        </ul>

        {/* Search Icon */}
        <FaSearch className="search-icon" onClick={() => setSearchOpen(true)} />
      </nav>

      {/* Search Modal */}
      {searchOpen && <SearchModal closeModal={() => setSearchOpen(false)} />}
    </>
  );
};

export default Navbar;
