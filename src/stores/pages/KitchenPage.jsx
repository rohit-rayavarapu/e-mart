import { kitchenData } from "../data/kitchen";

import Navbar from "../components/Navbar";
import React from "react";
import { Link } from "react-router-dom";
const KitchenPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {kitchenData.map((item) => {
          return (
            <div>
              <Link to={`/kitchens/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt="" />
                </div>
              </Link>
              <div className="proModel">
                {item.brand},{item.model}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default KitchenPage;
