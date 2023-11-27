// Navbar.js (React Component)

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-item">
        <Link to={"/"}>
          Home
        </Link>
      </div>
      <div className="nav-item">
        <div className="dropdown">
          <div className="dropdown-btn" onClick={toggleDropdown}>
            <Link to={"products"}>
                Products
            </Link>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content">
            <div className="dropdown-item">
              <Link to={"/men"}>
                Men
              </Link>
            </div>
            <div className="dropdown-item">
              <Link to={"/women"}>
                Women
              </Link>
            </div>
         </div>
          )}
        </div>
      </div>
      <div className="nav-item">
          <Link to={"/contact"}>
                Contact
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
