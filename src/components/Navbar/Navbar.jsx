// Navbar.js (React Component)

import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-item">Home</div>
      <div className="nav-item">
        <div className="dropdown">
          <div className="dropdown-btn" onClick={toggleDropdown}>
            <Link to={"products"}>
                Products
            </Link>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <div className="dropdown-item">Men</div>
              <div className="dropdown-item">Women</div>
              {/* <div className="dropdown-item">Service 3</div> */}
            </div>
          )}
        </div>
      </div>
      <div className="nav-item">Contact</div>
    </nav>
  );
};

export default Navbar;
