import React, { useState } from 'react';
import ProductCard from '../Card/ProductCard';
import ascInsertionSort from '../../DSAFunctions/sorting/ascendingSort';
import desInsertionSort from '../../DSAFunctions/sorting/descendingSort';

const ProductSection = ({ heading, product , isCart }) => {
  const [products, setProducts] = useState(product);
  const [sorted, setSorted] = useState(false);
  const [sortType, setSortType] = useState(null);

  const handleSort = (type) => {
    let sortedArray;
    if (type === 'ascending') {
      sortedArray = ascInsertionSort(products);
      setSortType('ascending');
    } else {
      sortedArray = desInsertionSort(products);
      setSortType('descending');
    }
    setProducts(sortedArray);
    setSorted(true);
  };

  const displayProducts = sorted ? products : product;

  return (
    <div>
      <div className='container my-4'>
        <div className='d-flex flex-row-reverse mb-4 sort-btn'>
          <div class="product-dropdown dropdown">
            <button class="btn btn-dark sort-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sort
            </button>
            <ul class="dropdown-menu">
              <li><button className='m-0' onClick={() => handleSort('ascending')}>Low Price</button></li>
              <li><button className='m-0' onClick={() => handleSort('descending')}>High Price</button></li>
            </ul>
          </div>
        </div>
        <h3 className='text-center'>{heading}</h3>
      </div>
      <div className='container my-4'>
        <div className='row'>
          {displayProducts.map((product, index) => (
            <div key={index} className='col-4'>
              <ProductCard product={product} isCart={isCart}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
