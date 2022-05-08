import React from "react";
import "./NewItem.style.scss";

const NewItem = ({ item }) => {
  return (
    <div className="new-item">
      <div className="new-item-image">
        <img src={item.image} alt="item" />
      </div>
      <div className="new-item-details">
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

export default NewItem;
