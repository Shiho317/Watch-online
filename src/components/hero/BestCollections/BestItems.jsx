import React from "react";
import { Link } from "react-router-dom";
import './BestItems.style.scss'

const BestItems = ({ data }) => {
  return (
    <div className="best-item">
      <div className="best-image">
        <img src={data.image} alt="item" />
      </div>
      <Link to={`/details/:${data.id}`}>
        <h3>{data.name}</h3>
      </Link>
    </div>
  );
};

export default BestItems;
