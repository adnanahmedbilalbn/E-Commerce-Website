// components/FeaturedProducts.js
import React from 'react';

const FeaturedProducts = ({ product }) => {
    console.log(product,"from feature")


    console.log(product,">,<<")
  return (
    <div className="featured-products">
      <h2>New Product</h2>
      <div className="product-list">
      <img src={product} alt={product.title} />

          {/* <div className="product" key={index}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>

            <button>Add to Cart</button>
          </div> */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
