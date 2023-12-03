import React from "react";
import { useSelector } from 'react-redux';
import men from "../api/Men";
import women from "../api/Women";
import sports from "../api/Sports";
import electronics from "../api/Electronics";
import ProductCard from "../components/Card/ProductCard";
import ProductSection from "../components/ProductSection/ProductSection";

const SearchPage = () => {

    const searchItem = useSelector((state) => state?.searchItem);
    
    return(
            <div>
                <ProductSection heading={searchItem}  product={men} />
            </div>
    )
}

export default SearchPage;