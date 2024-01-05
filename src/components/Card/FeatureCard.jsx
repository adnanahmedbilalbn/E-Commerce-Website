// components/FeaturedProducts.js
import React from 'react';

const FeaturedProducts = ({ product }) => {
  // console.log(product[[product.length - 1]],"from feature")
  console.log(product[0].name, "from feature");

  return (
    <div className="featured-products">
      <h2>New Product</h2>
      {product.map((product) => (
        <div className="product-list" key={product.name}>
          <img src={product.image} alt={product?.name} />
          <div className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
