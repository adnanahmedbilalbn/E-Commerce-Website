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
        <img src="path/to/search-icon.png" alt="Search" />
      </button>
    </div>
  );
};


export default SearchBar;
