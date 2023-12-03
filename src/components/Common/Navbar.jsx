import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar';


const Navbar = () => {

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> Akram's Shop</NavLink>
          <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav m-auto my-2 text-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">Products</NavLink>
              </li>
            </ul>

            <div className="buttons text-center">
              <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
              <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i>
                Cart
                {/* ({state.length})  */}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      {/* <SearchBar placeholder="Search..." onSearch={handleSearch} electronics={electronics} clothing={clothing} accessories={accessories} sports={sports} /> */}
      <div className='container'>
        <div className="search-bar rounded-pill">
          <input
            type="text"
            placeholder="Search ....."
            onChange={handleSearch}
          />
          <button className='rounded-circle btn btn-dark'>
            <i className="fa fa-search mr-1"></i>
          </button>
        </div>
        <div className='absolute'>
          <ul>
            {searchResults.map((product) => (
              <li key={product.id}>{product.name} - {product.category} </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar