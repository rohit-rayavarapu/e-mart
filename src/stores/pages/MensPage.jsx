import { menData } from "../data/men";
import Navbar from "../components/Navbar";
import React from "react";
import { Link } from "react-router-dom";
const MensPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {menData.map((item) => {
          return (
            <div>
              <Link to={`/mens/${item.id}`}>
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

export default MensPage;
