import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiMapPinLine } from "react-icons/ri";
import { MdPhone } from "react-icons/md";
import "../Footer.css"; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="footer-logo">True Beauty</h3>
          <p>Your one-stop shop for all things beauty.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/visit-store">Visit Our Store</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Help</h4>
          <ul>
            <li><a href="/help">Help</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/returns-exchanges">Returns & Exchanges</a></li>
            <li><a href="/shipping">Shipping</a></li>
            <li><a href="/terms-conditions">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p><MdPhone /> (212) 555-1234</p>
          <p><IoMdMail /> info@truebeautyshop.com</p>
          <p><RiMapPinLine /> 1234 Beauty Street, Nairobi, NB 10001</p>
          <a href="/get-direction" className="get-direction">Get Directions</a>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe to receive the latest beauty tips & offers.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} True Beauty. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
