import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';    
import { IoMdMail } from 'react-icons/io';
import { RiMapPinLine } from 'react-icons/ri';
import { MdPhone } from 'react-icons/md';
import '../Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2>True Beauty</h2>
        <p>Lorem quas utamur delicata qui, vix ei prima mentitum omnesque. Duo corrumpit cotidieque ne.</p>
        <div className="social-media-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
      <div className="footer-section">
        <h2>Company</h2>
        <ul>
          <li><a href="/about-us">About us</a></li>
          <li><a href="/our-story">Our Story</a></li>
          <li><a href="/visit-store">Visit Our Store</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h2>Help</h2>
        <ul>
          <li><a href="/help">Help</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/returns-exchanges">Returns + Exchanges</a></li>
          <li><a href="/shipping">Shipping</a></li>
          <li><a href="/terms-conditions">Terms & Conditions</a></li>
          <li><a href="/faq">FAQ’s</a></li>
          <li><a href="/compare">Compare</a></li>
          <li><a href="/wishlist">My Wishlist</a></li>
        </ul>
      </div>
      <div className="footer-section contact-section">
        <h2>Contact</h2>
        <p><MdPhone /> (212) 555-1234</p>
        <p><IoMdMail /> info@truebeautyshop.com</p>
        <p><RiMapPinLine /> 1234 Beauty Street, Suite 567, Nairobi, NB 10001</p>
        <a href="/get-direction" className="get-direction">Get direction</a>
      </div>
      <div className="footer-section newsletter-section">
        <h2>Sign Up for Email</h2>
        <p>Sign up to get first dibs on new arrivals, sales, exclusive content, events, and more!</p>
        <input type="email" placeholder="Enter your email..." />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;

