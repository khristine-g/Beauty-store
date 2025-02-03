import React from "react";
import "../About.css"; // Ensure the CSS file exists for styling

const About = () => {
  return (
    <div className="animate-on-scroll">
    <div className="about-container">

    <div className="about-images">
        <div className="about-image-big">
          <img
            src=" https://miro.medium.com/v2/resize:fit:1400/0*bJVKX3YQMQmdSGzn"
            alt="Beauty Product"
          />
        </div>
        <div className="about-image-small">
          <img
            src="https://cdn.shopify.com/s/files/1/0083/2303/9287/files/WhatsApp_Image_2023-02-01_at_5.45.03_PM_480x480.jpg?v=1675255337"
            alt="Beauty Product 1"
          />
          <img
            src="https://img.freepik.com/premium-photo/black-woman-face-smile-makeup-foundation-cosmetics-skincare-against-brown-studio-background-portrait-happy-african-female-applying-cosmetic-beauty-product-with-brush-skin-toner_590464-106484.jpg"
            alt="Beauty Product 2"
          />
        </div>
      </div>
     

      <div className="about-images">
        <div className="about-image-big">
          <img
            src=" https://miro.medium.com/v2/resize:fit:1400/0*bJVKX3YQMQmdSGzn"
            alt="Beauty Product"
          />
        </div>
        <div className="about-image-small">
          <img
            src="https://cdn.shopify.com/s/files/1/0083/2303/9287/files/WhatsApp_Image_2023-02-01_at_5.45.03_PM_480x480.jpg?v=1675255337"
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
