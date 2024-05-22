import { computerData } from "../data/computers";
import Navbar from "../components/Navbar";
import React from "react";
import { Link } from "react-router-dom";

const ComputersPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {computerData.map((item) => {
          return (
            <div>
              <Link to={`/computers/${item.id}`}>
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

export default ComputersPage;
