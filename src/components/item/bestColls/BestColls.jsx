import React from "react";
import BestItem from "./BestItem";
import "./BestColls.style.scss";

const BestColls = ({ bestCollsDatas }) => {
  return (
    <div className="best" id="best">
      <h1>Best Collections</h1>
      <hr className="border" />
      <div className="best-items">
        {bestCollsDatas.map((item) => (
          <BestItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default BestColls;
