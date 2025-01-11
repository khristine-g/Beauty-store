import React from 'react';
import { Link } from 'react-router-dom';
import '../Cart.css';

const Cart = ({ cart, onRemoveFromCart, onUpdateQuantity }) => {
  const calculateTotalPrice = () => {
    if (!cart || !Array.isArray(cart)) {
      return 0;
    }
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>My Cart</h2>
      {!cart || cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          {/* Cart items table */}
          <div className="cart-items">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div className="cart-item">
                        <img className="cart-img" src={product.image} alt={product.name} />
                        <span>{product.name}</span>
                      </div>
                    </td>
                    <td className='product-price'>ksh {product.price}</td>
                    <td>
                      <div className="quantity-container">
                        <button className="quantity-button" onClick={() => onUpdateQuantity(product.id, product.quantity - 1)}>-</button>
                        <span className="quantity">{product.quantity}</span>
                        <button className="quantity-button" onClick={() => onUpdateQuantity(product.id, product.quantity + 1)}>+</button>
                      </div>
                    </td>
                    <td className='product-price'>ksh {(product.price * product.quantity).toFixed(2)}</td>
                    <td >
                      <button className="remove-button" onClick={() => onRemoveFromCart(product.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart details */}
          <div className="cart-details">
            <h3>Cart Details</h3>
            <div className="cart-summary-item">
              <p>Total Price</p>
              <p>ksh {calculateTotalPrice().toFixed(2)}</p>
            </div>
            <div className="cart-summary-item">
              <p>Delivery Charges</p>
              <p>Free</p>
            </div>
            <div className="cart-summary-item">
              <p><strong>Total Amount</strong></p>
              <p><strong>ksh {calculateTotalPrice().toFixed(2)}</strong></p>
            </div>

            <Link className="checkout-link" to="/checkout">
              <button className="checkout-button">PROCEED TO CHECKOUT</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


