import React from 'react';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const buyItems = useSelector((state) => state?.buyingItem);
  console.log(buyItems)


  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea id="address" name="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="creditCard">Credit Card Number:</label>
          <input type="text" id="creditCard" name="creditCard" required />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" required />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
