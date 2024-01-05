import React from "react";
import { useSelector } from 'react-redux';
import ProductCard from "../components/Card/ProductCard";
import ProductSection from "../components/ProductSection/ProductSection";

const SearchPage = () => {

  const searchItem = useSelector((state) => state?.searchItem);
  console.log(searchItem,"asdasdasdad")

  return (
    <div>
      {(searchItem !== -1) ? (
          // searchItem.map((item)=>{
            // <ProductCard product={item} />
            <ProductSection heading={"Searched"} product={searchItem} />
          // })
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
