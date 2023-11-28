// Sidebar.js (React Component)

import React from 'react';

const Sidebar = ({ products, onProductClick }) => {

  return (
    <div className="sidebar">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} onClick={() => onProductClick(product)}>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
