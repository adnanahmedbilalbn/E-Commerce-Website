import React, { useState } from 'react';

// Sample data for different product categories
const electronics = [
  { id: 1, name: 'Smartphone', category: 'Electronics' },
  { id: 2, name: 'Laptop', category: 'Electronics' },
  // ... other electronics products
];

const clothing = [
  { id: 3, name: 'Shirt', category: 'Clothing' },
  { id: 4, name: 'Dress', category: 'Clothing' },
  // ... other clothing products
];

const accessories = [
  { id: 5, name: 'Watch', category: 'Accessories' },
  { id: 6, name: 'Sunglasses', category: 'Accessories' },
  // ... other accessory products
];

const sports = [
  { id: 7, name: 'Football', category: 'Sports' },
  { id: 8, name: 'Tennis racket', category: 'Sports' },
  // ... other sports products
];

const EcommerceWebsite = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Linear search across all product arrays
    const allProducts = [...electronics, ...clothing, ...accessories, ...sports];
    const results = allProducts.filter(
      (product) => product.name.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h1>E-commerce Website</h1>
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
      </div>
    </div>
  );
};

export default EcommerceWebsite;
