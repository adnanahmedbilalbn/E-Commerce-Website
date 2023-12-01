import React, { useState } from 'react';
import ProductCard from '../Card/ProductCard';
import { FaBars } from 'react-icons/fa';
import insertionSort from '../../DSAFunctions/Sorting';

const ProductSection = () => {
  const initialProducts = [
        {
          // image: 'path/to/product-image.jpg',
          category: 'Electronics',
          title: 'Smartphone',
          price: 1299.99,
          rating: 4,
        },
        {
          // image: 'path/to/product-image.jpg',
          category: 'Men',
          title: 'Shirt',
          price: 350.99,
          rating: 2,
        },
        {
          // image: 'path/to/product-image.jpg',
          category: 'Men',
          title: 'Shirt',
          price: 300.99,
          rating: 2,
        },
        {
          // image: 'path/to/product-image.jpg',
          category: 'Women',
          title: 'Shirt',
          price: 1000,
          rating: 4,
        },
        {
          // image: '/path/to/producy-image.jpg',
          category: 'Sports',
          title: 'Dart',
          price: 149.99,
          rating: 4,
        }
      ];
    
  const [products, setProducts] = useState(initialProducts);
  const [sorted, setSorted] = useState(false);

  const handleSort = () => {
    const sortedArray = insertionSort(products);
    setProducts(sortedArray);
    setSorted(true);
  };

  const displayProducts = sorted ? products : initialProducts;

  return (
    <div>
      <h3 className='text-center'>Our Products</h3>
      <div className='btn btn-lg btn-outline-dark' onClick={handleSort}>
        <FaBars /> <span>Sort</span>
      </div>
      <div className='container'>
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
