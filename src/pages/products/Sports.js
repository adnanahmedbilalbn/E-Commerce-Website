import React from "react";
import sports from "../../api/Sports";
import ProductSection from "../../components/ProductSection/ProductSection";

const SportsProducts = () => {
  const sectionTitle = ["Sport's Collection"]
  
  return (
    <div>
      <ProductSection heading={sectionTitle} product={sports} />
    </div>
  )
}

export default SportsProducts
export const sportsarray = sports

