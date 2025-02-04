import React from "react";
import "../About.css"; // Ensure the CSS file exists for styling

const About = () => {
  return (
    <div className="animate-on-scroll">
    <div className="about-container">
      <div className="about-content">
        <h2>About Us</h2>
        <div className="about-item">
          <div className="about-number">01</div>
          <div className="about-text">
            <h3>The Best Price</h3>
            <p>
              The best price we provide is in accordance with the quality and quantity of the products. Indulge in luxurious beauty without breaking the bank.
            </p>
          </div>
        </div>
        <div className="about-item">
          <div className="about-number">02</div>
          <div className="about-text">
            <h3>Unique Style</h3>
            <p>
              Embrace elegance with our unique, curated beauty products designed to fit your style and make you shine.
            </p>
          </div>
        </div>
        <div className="about-item">
          <div className="about-number">03</div>
          <div className="about-text">
            <h3>Quality You  Trust</h3>
            <p>
              Every product we offer is carefully selected to meet the highest standards of quality and care for your beauty needs.
            </p>
          </div>
        </div>
      </div>

      <div className="about-images">
        <div className="about-image-big">
          <img
            src="https://i.ytimg.com/vi/xgEnbHEjj-g/maxresdefault.jpg"
            alt="Beauty Product"
          />
        </div>
        <div className="about-image-small">
          <img
            src="https://media.theeverygirl.com/wp-content/uploads/2020/07/best-makeup-brands-for-black-women-the-everymom-f-h.jpg"
            alt="Beauty Product 1"
          />
          <img
            src="https://img.freepik.com/premium-photo/black-woman-face-smile-makeup-foundation-cosmetics-skincare-against-brown-studio-background-portrait-happy-african-female-applying-cosmetic-beauty-product-with-brush-skin-toner_590464-106484.jpg"
            alt="Beauty Product 2"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About; 