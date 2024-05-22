import { acData } from "../data/ac";

import React from "react";

const Computers = () => {
  const firstFiveImages = acData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>AC</h2>
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
