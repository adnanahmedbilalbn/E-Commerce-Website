// CategoriesSection.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import img1 from "../../assets/images/ProductImages/category/men2.jpg"
import img2 from "../../assets/images/ProductImages/category/women.jpg"
import img3 from "../../assets/images/ProductImages/category/electronics.jpg"
import img4 from "../../assets/images/ProductImages/category/sports.jpg"

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
                src={img1}
                alt="Category 1"
              />
              <h4 className="category-title"><Link to='/products/men'>Men</Link></h4>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="category-card">
              <img
                className="category-img"
                src={img2}
                alt="Category 2"
              />
              <h4 className="category-title"><Link to='/products/women'>Women</Link></h4>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="category-card">
              <img
                className="category-img"
                src={img3}
                alt="Category 3"
              />
              <h4 className="category-title"><Link to='/products/electronics'>Electronics</Link></h4>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="category-card">
              <img
                className="category-img"
                src={img4}
                alt="Category 4"
              />
              <h4 className="category-title"><Link to="/products/sports">Sports</Link> </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
