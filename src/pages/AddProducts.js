import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProductData } from '../redux/actions/addProductAction';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCtg, setProductCtg] = useState('');
  const [productImage, setProductImage] = useState('');
  const dispatch = useDispatch()

  const completeProduct = [...productName, ...productPrice, ...productImage, ...productCtg]

  const handleAddProduct = () => {
    // console.log('Product added:', productName, productPrice, productCtg, productImage);
    // console.log(productCtg,productImage,productName, productPrice,"asdfasdfasdfasdf")
    // console.log(completeProduct)
    console.log(productImage,"from admin")
    dispatch(setProductData(productImage))
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="page-container">
      <div className="section">
        <h2 className="title">Add Product</h2>
        {productImage && <img src={productImage} alt="Product" />}
        <form className="form">
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder='Product Name'
            className='border'
          />
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder='Product Price'
            className='border'
          />
          <input
            type="text"
            value={productCtg}
            onChange={(e) => setProductCtg(e.target.value)}
            placeholder='Product Category'
            className='border'
          />
          <input
            type="file"
            onChange={handleImageChange}
            className='border'
          />
          <button type="button" className="button" onClick={handleAddProduct}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
