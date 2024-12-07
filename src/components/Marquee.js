// Marquee.js
import React from 'react';
import '../Marquee.css'; // Make sure to link the CSS file

const Marquee = () => {
  const messages = [
    'LIMITED TIME OFFER: BEAUTY SALE YOU CAN\'T RESIST',
    'FREE SHIPPING AND RETURN',
    'NEW SEASON, NEW STYLES: BEAUTY SALE YOU CAN\'T MISS',
    'LIMITED TIME OFFER: BEAUTY SALE YOU CAN\'T RESIST',
    'FREE SHIPPING AND RETURN'
  ];

  return (
    <div className="marquee-container">
      <div className="marquee">
        {messages.map((msg, index) => (
          <span key={index} className="marquee-item">{msg} | </span>
        ))}
        {/* Duplicate the messages for seamless effect */}
        {messages.map((msg, index) => (
          <span key={`duplicate-${index}`} className="marquee-item">{msg} | </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
