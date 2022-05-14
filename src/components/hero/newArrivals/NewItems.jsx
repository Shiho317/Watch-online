import React from "react";
import { Link } from "react-router-dom";
import "./NewItems.style.scss";

const NewItems = ({ data }) => {
  return (
    <div className="new-item">
      <div className="new-image">
        <img src={data.image} alt="item" />
      </div>
      <Link to={`/details/${data.id}`}>
        <h3>{data.name}</h3>
      </Link>
    </div>
  );
};

export default NewItems;
