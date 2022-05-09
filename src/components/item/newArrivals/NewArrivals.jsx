import React from "react";
import NewItem from "./NewItem";
import "./NewArrivals.style.scss";

const NewArrivals = ({ newArrivalDatas, items }) => {
  return (
    <div className="new" id="new">
      <h1>New Arrivals</h1>
      <hr className="border" />
      <div className="new-items">
        {newArrivalDatas.map((item) => (
          <NewItem item={item} key={item.id} items={items} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
