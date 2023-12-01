import React from 'react';
import ProductCard from "../Card/ProductCard";

const ProductSection = () => {
  const insertionSort = (array) => {
    const length = array.length;
    for (let i = 1; i < length; i++) {
      let current = array[i];
      let j = i - 1;
      while (j >= 0 && array[j].price > current.price) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = current;
    }
    return array;
  };

  const Product = [
    {
      image: 'path/to/product-image.jpg',
      category: 'Electronics',
      title: 'Smartphone',
      price: 1299.99,
      rating: 4,
    },
    {
      image: 'path/to/product-image.jpg',
      category: 'Men',
      title: 'Shirt',
      price: 350.99,
      rating: 2,
    },
    {
      image: 'path/to/product-image.jpg',
      category: 'Men',
      title: 'Shirt',
      price: 300.99,
      rating: 2,
    },
    {
      image: 'path/to/product-image.jpg',
      category: 'Women',
      title: 'Shirt',
      price: 1000,
      rating: 4,
    },
    {
      image: '/path/to/producy-image.jpg',
      category: 'Sports',
      title: 'Dart',
      price: 149.99,
      rating: 4,
    }
  ];

  const sortedArray = insertionSort(Product);
  console.log(sortedArray);

  return (
    <div>
      <h3 className='text-center'>Our Products</h3>
      <div className='container'>
        <div className='row'>
          {sortedArray.map((product, index) => (
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
