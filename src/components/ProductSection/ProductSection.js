import React, { useState } from 'react';
import ProductCard from '../Card/ProductCard';
import { FaBars } from 'react-icons/fa';
import insertionSort from '../../DSAFunctions/Sorting';

const ProductSection = ({ heading, product }) => {
  const [products, setProducts] = useState(product);
  const [sorted, setSorted] = useState(false);

  const handleSort = () => {
    const sortedArray = insertionSort(products);
    setProducts(sortedArray);
    setSorted(true);
  };

  const displayProducts = sorted ? products : product;

  return (
    <div>
      <div className='container my-4'>
        <div className='d-flex flex-row-reverse mb-4 sort-btn'>
          <button className='btn btn-lg btn-outline-dark' onClick={handleSort}><FaBars /> Sort</button>
        </div>
        <h3 className='text-center'>{heading}</h3>
      </div>
      <div className='container my-4'>
        <div className='row'>
          {displayProducts.map((product, index) => (
            <div key={index} className='col-4'>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
