import React from "react";
import NewItems from "./NewItems";
import "./NewArr.style.scss";
import { MdArrowForwardIos } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';

const NewArr = ({ newArrDatas }) => {
  return (
    <div className="new-arrivals">
      <h2>New Arrivals</h2>
      <div className="items-wrapper">
        {newArrDatas.slice(0, 3).map((data) => (
          <NewItems data={data} key={data.id} />
        ))}
      </div>
      <HashLink to="/item#new">
        <button>
          <h3>See More</h3>
          <MdArrowForwardIos />
        </button>
      </HashLink>
    </div>
  );
};

export default NewArr;
