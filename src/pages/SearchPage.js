import React from "react";
import { useSelector } from 'react-redux';
import ProductCard from "../components/Card/ProductCard";

const SearchPage = () => {

  const searchItem = useSelector((state) => state?.searchItem);

  return (
    <div>
      {(searchItem !== -1) ? (
        <ProductCard product={searchItem} />
      ) : (
        <div className="text-center">
          <p>Sorry !</p>
          <p >Nothing Found</p>
        </ div>
      )}
    </div>
  );
};

export default SearchPage;
