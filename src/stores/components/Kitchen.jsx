import { kitchenData } from "../data/kitchen";

import React from "react";

const Computers = () => {
  const firstFiveImages = kitchenData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Kitchen</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imgBox">
              <img
                src={item.image}
                alt={item.description}
                className="proImage"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Computers;
