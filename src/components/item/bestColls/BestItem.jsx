import React from "react";
import "./BestItem.style.scss";

const BestItem = ({ item }) => {
  return (
    <div className="best-item">
      <div className="best-item-image">
        <img src={item.image} alt="item" />
      </div>
      <div className="best-item-details">
        <h3>{item.company}</h3>
        <h4>{item.name}</h4>
        <h4>CA${item.price.toFixed(2)}</h4>
      </div>
      <div className="buttons">
        <button>Add To Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default BestItem;
