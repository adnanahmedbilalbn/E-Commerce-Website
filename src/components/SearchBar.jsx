// SearchBar.js

import React from 'react';

const SearchBar = ({ placeholder, onSearch }) => {
  const handleSearch = (event) => {

    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
      />
      <button>
      <i className="fa fa-search mr-1"></i>
      </button>
    </div>
  );
};


export default SearchBar;
