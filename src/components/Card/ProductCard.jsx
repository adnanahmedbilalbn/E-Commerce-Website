// ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
  const { image, category, title, price, rating } = product;
  const handleAddToCart = () => {

    console.log(`Added to cart: ${title}`);
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
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;
