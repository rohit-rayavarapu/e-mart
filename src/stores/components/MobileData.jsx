import React from "react";
import { mobileData } from "../data/mobiles";

const MobileData = () => {
  const firstFiveImages = mobileData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Mobiles</h2>
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

export default MobileData;
