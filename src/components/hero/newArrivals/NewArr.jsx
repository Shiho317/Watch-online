import React, { useContext } from "react";
import { AppContext } from "../../../App";
import NewItems from "./NewItems";
import "./NewArr.style.scss";
import { MdArrowForwardIos } from "react-icons/md";
import { NavHashLink } from "react-router-hash-link";

const NewArr = () => {
  const { datas } = useContext(AppContext);

  return (
    <div className="new-arrivals">
      <h2>New Arrivals</h2>
      <div className="items-wrapper">
        {datas.slice(0, 3).map((data) => (
          <NewItems data={data} key={data.id} />
        ))}
      </div>
      <NavHashLink to="/item#new">
        <button>
          <h3>See More</h3>
          <MdArrowForwardIos />
        </button>
      </NavHashLink>
    </div>
  );
};

export default NewArr;
