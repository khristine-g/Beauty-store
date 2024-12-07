// Cart.js
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
      <h2>Your Cart</h2>
      {!cart || cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className='cart-table'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img className='cart-img' src={product.image} alt={product.name} />
                    {product.name}
                  </td>
                  <td>${product.price}</td>
                  <td>
                    <button onClick={() => onUpdateQuantity(product.id, product.quantity - 1)}>-</button>
                    {product.quantity}
                    <button onClick={() => onUpdateQuantity(product.id, product.quantity + 1)}>+</button>
                  </td>
                  <td>${(product.price * product.quantity).toFixed(2)}</td>
                  <td>
                    <button className="remove-button" onClick={() => onRemoveFromCart(product.id)}>X</button>
                  </td>
                </tr>
              ))}
              <tr className="total-row">
                <td colSpan="3">Total</td>
                <td>${calculateTotalPrice().toFixed(2)}</td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <Link className='checkout-link' to="/checkout">
            <button className="checkout-button">PROCEED TO CHECKOUT</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;



