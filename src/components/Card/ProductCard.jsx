// ProductCard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCartData } from '../../redux/actions/cartActions';


const ProductCard = ({ product }) => {

  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const { image, category, title, price, rating } = product;

  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product}`);
    dispatch(setCartData(product))
    Navigate("/cart")
  };

  const handleBuyNow = () => {
    console.log(`Buy now: ${title}`);
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
          {/* <button onClick={handleAddToCart(title,price)}>Add to Cart</button> */}
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>

          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;
