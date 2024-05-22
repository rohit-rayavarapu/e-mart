import React from "react";
import { tvData } from "../stores/data/tv";
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";
const TvSingle = () => {
  const { id } = useParams();
  const product = tvData.find((item) => item.id === id);
  console.log(id);
  return (
    <>
    <Navbar />
    <div className="ind-section">
      <div className="ind-image">
        <img src={product.image} alt="loading" />
      </div>
      <div className="ind-details space">
        <div className="ind-company space">
          <h2>{product.company}</h2>
        </div>
        <div className="ind-model space">
          <h3>{product.model}</h3>
        </div>
        <div className="ind-price space">
          <h3>{product.price}</h3>
        </div>
        <div className="ind-desc space">
          <h3>{product.description}</h3>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  </>
  );
};

export default TvSingle;
