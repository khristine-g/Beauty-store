import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Sales.css";

const Sales = () => {
  const navigate = useNavigate();
  const calculateTimeLeft = () => {
    const endTime = new Date("2025-04-11T00:00:00"); // Set your countdown end date
    const now = new Date();
    const difference = endTime - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleViewAll = () => {
    navigate("/all-products");
  };

  return (

    <div className="sales-container">
      {/* Image Section */}
      <div
        className="sales-image"
        style={{
          backgroundImage: `url('https://assetsio.reedpopcdn.com/makeup-article-(3).jpg')`,
          objectFit:'Cover',
        }}
      ></div>

      {/* Countdown and Content Section */}
      <div className="sales-content">
        <h1 className="sales-title">Up to 60% Off</h1>
        <h2 className="sales-subtitle">End of Season Sale</h2>
        <div className="countdown">
          <div className="time-box">
            <span className="time-value">{timeLeft.days || "0"}</span>
            <span className="time-label">Days</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.hours || "0"}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.minutes || "0"}</span>
            <span className="time-label">Minutes</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.seconds || "0"}</span>
            <span className="time-label">Seconds</span>
          </div>
        </div>
        <p className="sales-description">
          Don't miss out on the biggest sale of the season! Grab your favorite
          items now.
        </p>
        <button className="shop-now-btn" onClick={handleViewAll}>Shop Now</button>
      </div>
    </div>
   
  );
};

export default Sales;
// https://assetsio.reedpopcdn.com/makeup-article-(3).jpg
//https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2024-06/Untitled%20design%20%281%29.jpg