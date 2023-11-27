// CategoriesSection.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoriesSection = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="text-center mb-4">Main Categories</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="category-card">
              {/* Category Image */}
              <img
                className="category-img"
                src="https://placekitten.com/300/200"
                alt="Category 1"
              />
              {/* Category Title */}
              <h4 className="category-title">Category 1</h4>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="category-card">
              {/* Category Image */}
              <img
                className="category-img"
                src="https://placekitten.com/300/200"
                alt="Category 2"
              />
              {/* Category Title */}
              <h4 className="category-title">Category 2</h4>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="category-card">
              {/* Category Image */}
              <img
                className="category-img"
                src="https://placekitten.com/300/200"
                alt="Category 3"
              />
              {/* Category Title */}
              <h4 className="category-title">Category 3</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
