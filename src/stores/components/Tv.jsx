import { tvData } from "../data/tv";

import React from "react";

const Computers = () => {
  const firstFiveImages = tvData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>TV</h2>
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
