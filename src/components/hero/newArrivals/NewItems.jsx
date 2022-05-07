import React from "react";
import "./NewItems.style.scss";

const NewItems = ({ data }) => {
  return (
    <div className="new-items">
      <img src={data.image} alt="item" />
    </div>
  );
};

export default NewItems;
