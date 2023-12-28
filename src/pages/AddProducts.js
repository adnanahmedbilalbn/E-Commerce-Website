// AddProduct.js
import React, { useState } from 'react';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = () => {
    // Implement logic to add product (e.g., send data to backend)
    console.log('Product added:', productName, productPrice);
  };

  return (
    <div className="page-container">
      <div className="section">
        <h2 className="title">Add Product</h2>
        <form className="form">
          <label>
            Product Name:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </label>
          <label>
            Product Price:
            <input
              type="text"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </label>
          <button type="button" className="button" onClick={handleAddProduct}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
