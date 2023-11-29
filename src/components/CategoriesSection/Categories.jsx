// CategoriesSection.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoriesSection = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="text-center mb-4">Main Categories</h2>
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="category-card">
              <img
                className="category-img"
                src="https://placekitten.com/300/200"
                alt="Category 1"
              />
              <h4 className="category-title">Men</h4>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="category-card">
              <img
                className="category-img"
                src="https://placekitten.com/300/200"
                alt="Category 2"
              />
              <h4 className="category-title">Women</h4>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="category-card">
              <img
                className="category-img"
                src="https://placekitten.com/300/200"
                alt="Category 3"
              />
              <h4 className="category-title">Electronics</h4>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="category-card">
              <img
                className="category-img"
                src="https://placekitten.com/300/200"
                alt="Category 3"
              />
              <h4 className="category-title">Sports</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
