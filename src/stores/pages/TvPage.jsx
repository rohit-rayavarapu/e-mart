import { tvData } from "../data/tv";
import Navbar from "../components/Navbar";
import React from "react";
import { Link } from "react-router-dom";

const TVPage = () => {
  return (
    <>
      <Navbar />
      <div className="pageSection">
        {tvData.map((item) => {
          return (
            <div>
              <Link to={`/tvs/${item.id}`}>
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

export default TVPage;
