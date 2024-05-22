import React from "react";
import MobileData from "./MobileData";
import Computers from "./Computers";
import Ac from "./Ac";
import Books from "./Books";
import Fridge from "./Fridge";
import Furniture from "./Furniture";
import Kitchen from "./Kitchen";
import Men from "./Men";
import Speakers from "./Speakers";
import Tv from "./Tv";
import Watch from "./Watch";
import Women from "./Women";

const Products = () => {
  return (
    <div>
      <Ac />
      <Books />
      <Computers />
      <Fridge />
      <Furniture />
      <Kitchen />
      <Men />
      <MobileData />
      <Speakers />
      <Tv />
      <Watch />
      <Women />
    </div>
  );
};

export default Products;
