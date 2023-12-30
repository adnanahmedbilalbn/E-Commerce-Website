// CartCard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCartData } from '../../redux/actions/cartActions';
import Modal from '../Common/Modal'; // Import the Modal component
import { setItemData } from '../../redux/actions/buyNowAction';

const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { image, category, title, price, rating } = product;

  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product}`);
    dispatch(setCartData(product));
    Navigate('/cart');
  };

  const handleBuyNow = () => {
    console.log(`Buy now: ${title}`, price, image);
    dispatch(setItemData(product))
    console.log("buy now item dispatched==>",product)
    Navigate("/checkoutPage")
    // setShowModal(true);
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
        <h2>{title}</h2>
        <p>Price: ${price}</p>
        <img src={image} />
        <button onClick={()=>Navigate("/checkoutPage")}>Buy</button>
      </Modal>
    </div>
  );
};

export default CartCard;
