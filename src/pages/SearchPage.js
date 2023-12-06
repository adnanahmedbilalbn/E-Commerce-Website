import React from "react";
import { useSelector } from 'react-redux';
import men from "../api/Men";
import women from "../api/Women";
import sports from "../api/Sports";
import electronics from "../api/Electronics";
import ProductCard from "../components/Card/ProductCard";

const SearchPage = () => {

  const searchItem = useSelector((state) => state?.searchItem);
  const allProducts = [...men, ...women, ...sports, ...electronics];

  const foundProduct = allProducts.find(product =>
    product.title && typeof searchItem === 'string' &&
    product.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      {foundProduct ? (
        <ProductCard product={foundProduct} />
      ) : (
        <p>Nothing Found</p>
      )}
    </div>
  );
};

export default SearchPage;
