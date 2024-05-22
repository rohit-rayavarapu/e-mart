import React, { useState } from "react";
import { mobileData } from "../data/mobiles";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const MobilePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct(mango);
    }
  };
  return (
    <>
      <Navbar />
      <div className="pro-selected">
        {mobileData.map((phone) => {
          return (
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(phone.company)}
                  onClick={companyHandler(phone.company)}
                />
              </label>
            </div>
          );
        })}
      </div>
      <div className="pageSection">
        {mobileData.map((item) => {
          return (
            <div>
              <Link to={`/mobiles/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt="" />
                </div>
              </Link>
              <div className="proModel">
                {item.company},{item.model}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MobilePage;
