import React from "react";
import "../About.css"; // Ensure the CSS file exists for styling

const About = () => {
  return (
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
            <h3>Quality You Can Trust</h3>
            <p>
              Every product we offer is carefully selected to meet the highest standards of quality and care for your beauty needs.
            </p>
          </div>
        </div>
      </div>

      <div className="about-images">
        <div className="about-image-big">
          <img
            src="https://www.cnet.com/a/img/resize/04bb56affe028206d284dea10408493a01663be7/hub/2024/10/23/c95a96d7-e0a1-41fb-8ddf-df17ecaecfdb/gettyimages-1937066463.jpg?auto=webp&fit=crop&height=675&width=1200"
            alt="Beauty Product"
          />
        </div>
        <div className="about-image-small">
          <img
            src="https://www.moussonews.com/wp-content/uploads/2023/02/Capture-decran-2023-02-10-160343-1024x674.png"
            alt="Beauty Product 1"
          />
          <img
            src="https://fashionintern.co.uk/uploads/2023/08/what-is-the-difference-between-makeup-and-cosmetics.webp"
            alt="Beauty Product 2"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
