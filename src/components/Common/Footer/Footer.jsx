// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-md-6">
            <h4>Follow Us</h4>
            {/* Add social media icons or links here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
