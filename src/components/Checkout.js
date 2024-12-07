import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Checkout.css';

const Checkout = ({ cart, onPlaceOrder }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    country: '',
    town: '',
    zipCode: '',
    phoneNumber: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Rendering Checkout component');
    console.log('Cart:', cart);
  }, [cart]);

  useEffect(() => {
    console.log('UserInfo:', userInfo);
  }, [userInfo]);

 
    const calculateTotalPrice = () => {
      if (!cart || !Array.isArray(cart)) {
        return 0;
      }
      return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async () => {
    if (userInfo.firstName && userInfo.lastName && userInfo.email && userInfo.address) {
      // Simulate placing the order and receiving an order number and date
      const orderNumber = Math.floor(Math.random() * 1000000000);
      const date = new Date().toLocaleDateString();
      const total = calculateTotalPrice();
      const paymentMethod = 'Credit Card';  // Example payment method

      const orderDetails = cart.map((item) => ({
        id: item.id,
        productName: item.name,
        price: item.price,
      }));

      // Navigate to OrderConfirmation component with state
      navigate('/order-confirmation', {
        state: {
          orderNumber,
          date,
          total,
          paymentMethod,
          orderDetails,
        },
      });
    } else {
      console.error('Please fill in all required fields.');
    }
  };

  return (
    <div className="checkout-container">
      <div className="billing-details">
        <h2>Billing Details</h2>
        <form className='check-form'>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={userInfo.firstName} onChange={handleChange} required />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={userInfo.lastName} onChange={handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={userInfo.email} onChange={handleChange} required />

          <label htmlFor="address">Street Address:</label>
          <textarea id="address" name="address" value={userInfo.address} onChange={handleChange} required />

          <label htmlFor="country">Country:</label>
          <select id="country" name="country" value={userInfo.country} onChange={handleChange} required>
            <option value="">Select your country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            {/* Add more countries as needed */}
          </select>

          <label htmlFor="town">Town/City:</label>
          <input type="text" id="town" name="town" value={userInfo.town} onChange={handleChange} required />

          <label htmlFor="zipCode">ZIP Code:</label>
          <input type="text" id="zipCode" name="zipCode" value={userInfo.zipCode} onChange={handleChange} required />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={userInfo.phoneNumber} onChange={handleChange} required />

         
        </form>
      </div>

      <div className="checkout-summary">
        <div className="cart-summary">
          <h2>Checkout Summary</h2>
          <h3 style={{color:'green'}}>Cart Summary:</h3>
          <ul className='check-list'>
            {cart.map((product) => (
              <li key={product.id}>
                <img className='check-img' src={product.image} alt={product.name} />
                <h4 className='check-name'>{product.name}</h4>
                <p className='check-quantity'>{product.quantity}</p>

                <p className='check-price'>${product.price}</p>

              </li>
            ))}
          </ul>
          <p className='total-price'>Total Price: ${calculateTotalPrice()}</p>
        </div>

        <div className="payment-details">
          <h4>Payment Methods</h4>
          <div className="payment-options">
            <div>
              <input type="radio" id="bankTransfer" name="paymentMethod" />
              <label htmlFor="bankTransfer">Direct bank transfer</label>
              <p>
                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                Your order will not be shipped until the funds have cleared in our account.
              </p>
            </div>
            <div>
              <input type="radio" id="checkPayments" name="paymentMethod" />
              <label htmlFor="checkPayments">Check payments</label>
              <p>
                Phasellus sed volutpat orci. Fusce eget lorem mauris, vehicula elementum gravida nec dui.
                Aenean aliquam varius ipsum, non ultricies tellus sodales eu.
              </p>
            </div>
            <div>
              <input type="radio" id="cashOnDelivery" name="paymentMethod" />
              <label htmlFor="cashOnDelivery">Cash on delivery</label>
              <p>
                Phasellus sed volutpat orci. Fusce eget lorem mauris, vehicula elementum gravida nec dui.
                Aenean aliquam varius ipsum, non ultricies tellus sodales eu.
              </p>
            </div>
            <div>
              <input type="radio" id="paypal" name="paymentMethod" />
              <label htmlFor="paypal">Paypal</label>
              <p>
                Phasellus sed volutpat orci. Fusce eget lorem mauris, vehicula elementum gravida nec dui.
                Aenean aliquam varius ipsum, non ultricies tellus sodales eu.
              </p>
            </div>
          </div>

          <p className="privacy-notice">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
          </p>

          <button className="checkout-button" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
};


export default Checkout;







