import React from 'react';
import { useLocation } from 'react-router-dom';
import '../OrderConfirmation.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderNumber, date, total, paymentMethod, orderDetails } = location.state;

  return (
    <div className="confirmation-container">
      <div className="confirmation-message">
        <div className="tick-icon">✓</div>
        <h2>Your Order is Completed!</h2>
        <p>Thank you. Your order has been received.</p>
      </div>

      <div className="order-summary border-box">
        <h3>Order Summary</h3>
        <div className="summary-item">
          <span>Order Number:</span> <span>{orderNumber}</span>
        </div>
        <div className="summary-item">
          <span>Date:</span> <span>{date}</span>
        </div>
        <div className="summary-item">
          <span>Total:</span> <span>${total}</span>
        </div>
        <div className="summary-item">
          <span>Payment Method:</span> <span>{paymentMethod}</span>
        </div>
      </div>

      <div className="order-details border-box">
        <h3>Order Details</h3>
        <ul>
          {orderDetails.map((item) => (
            <li key={item.id}>
              <span>{item.productName}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
        <div className="order-total">
          <span>Free Shipping</span>
          <span>Total: ${total}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
