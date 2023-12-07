import React from "react";
import { useSelector } from 'react-redux';
import ProductCard from "../components/Card/ProductCard";

const SearchPage = () => {

  const searchItem = useSelector((state) => state?.searchItem);

  return (
    <div>
      {searchItem? (
        <ProductCard product={searchItem} />
      ) : (
        <p>Nothing Found</p>
      )}
    </div>
  );
};

export default SearchPage;
