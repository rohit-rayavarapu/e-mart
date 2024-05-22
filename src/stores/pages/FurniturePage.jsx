import { furnitureData } from "../data/furniture";

import Navbar from "../components/Navbar";
import React from "react";
import { Link } from "react-router-dom";

const FurniturePage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {furnitureData.map((item) => {
          return (
            <div>
              <Link to={`/furnitures/${item.id}`}>
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

export default FurniturePage;
