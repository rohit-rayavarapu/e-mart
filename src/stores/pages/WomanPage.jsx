import { womanData } from "../data/woman";
import Navbar from "../components/Navbar";
import React from "react";
import { Link } from "react-router-dom";

const WomanPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {womanData.map((item) => {
          return (
            <div>
              <Link to={`/womans/${item.id}`}>
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

export default WomanPage;
