import React, { useState } from 'react';

const AddProducts = () => {
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    price: '',
    rating: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', productData);
    setProductData({
      name: '',
      category: '',
      price: '',
      rating: '',
      image: null,
    });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Product Name:
          <input type="text" name="name" value={productData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Category:
          <input type="text" name="category" value={productData.category} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" name="price" value={productData.price} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Rating:
          <input type="text" name="rating" value={productData.rating} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" name="image" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProducts;