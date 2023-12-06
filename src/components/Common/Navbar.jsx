import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar';
import linearSearch from '../../DSAFunctions/Searching';
import { setSearchData } from '../../redux/actions/searchAction';
import { useDispatch } from 'react-redux';
import men from '../../api/Men';
import women from '../../api/Women';
import sports from '../../api/Sports';
import electronics from '../../api/Electronics';

const Navbar = () => {

  const products = [...men, ...women, ...sports, ...electronics];
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const [searchResults, setSearchResults] = useState([]);
  const[searchVal, setSearchVal] = useState([]);
  const [query, setQuery] = useState([])

  function handlePage(){   
    setSearchVal(linearSearch(products, query))
    dispatch(setSearchData(searchVal))
    Navigate("/searchPage")
  }

  function handleSearch(event){
    setQuery(event.target.value);
    dispatch(setSearchData(searchVal))
    setSearchVal(linearSearch(products, event.target.value))
    // Navigate("/searchPage")
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
          <button onClick={handlePage} className='rounded-circle btn btn-dark'>
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