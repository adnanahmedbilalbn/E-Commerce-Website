// ProductCard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCartData } from '../../redux/actions/cartActions';
import Modal from '../Common/Modal';
import { setItemData } from '../../redux/actions/buyNowAction';
import { useSelector } from 'react-redux';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { image, category, title, price, rating } = product;

  const [showModal, setShowModal] = useState(false);

  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
  });

  const buyItems = useSelector((state) => state?.buyingItem);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, number, address } = customerDetails;

    dispatch(setItemData({ product, customer: { name, email, number, address } }));

    setCustomerDetails({
      name: '',
      email: '',
      number: '',
      address: '',
    });

    setShowModal(false);
    alert("Your Order has been Placed!.Thank you")
    Navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product}`);
    dispatch(setCartData(product));
    alert(`Added to cart: ${product.title}`)
    // Navigate('/cart');
  };

  const handleBuyNow = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} />

      <div className="product-details">
        <span className="category">{category}</span>
        <h3 className="title">{title}</h3>
        <p className="price">${price}</p>
        <div className="rating">
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index} role="img" aria-label="star">
              ⭐
            </span>
          ))}
        </div>
        <div className="buttons">
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>

      <Modal show={showModal} handleClose={closeModal}>
        <div>
          <h1>Checkout</h1>
          <div>
            <img src={image} alt={title} />
            <p>Product Name: {title}</p>
            <p className="text-success">Price: ${price}</p>
          </div>
          <div>
            <h1>Details</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={customerDetails.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={customerDetails.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="number">Cell no:</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={customerDetails.number}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="address"
                  name="address"
                  value={customerDetails.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Address"
                />
              </div>

              <button type="submit">Buy</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
