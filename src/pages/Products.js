import React, { useState } from 'react';
import CategoriesSection from '../components/CategoriesSection/Categories';
import MiniProducts from '../components/ProductSection/ProductSection2';

const EcommerceWebsite = () => {

  
  // const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = (event) => {
  //   const query = event.target.value.toLowerCase();
  //   setSearchQuery(query);

  //   // Linear search across all product arrays
  //   const allProducts = [...electronics, ...clothing, ...accessories, ...sports];
  //   const results = allProducts.filter(
  //     (product) => product.name.toLowerCase().includes(query)
  //   );
  //   setSearchResults(results);
  // };

  return (
    <div>
      <CategoriesSection />
      <MiniProducts />

      {/* <h1>E-commerce Website</h1>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
        value={searchQuery}
      />
      <div>
        <h2>Search Results:</h2>
        <ul>
          {searchResults.map((product) => (
            <li key={product.id}>{product.name} - {product.category}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default EcommerceWebsite;


