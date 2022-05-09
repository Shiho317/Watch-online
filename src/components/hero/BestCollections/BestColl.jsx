import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import BestItems from "./BestItems";
import "./BestColl.style.scss";
import { HashLink } from 'react-router-hash-link';

const BestColl = ({ bestDatas }) => {
  return (
    <div className="best-collections">
      <h2>Best Collections</h2>
      <div className="best-header">
        <div className="best-header-image">
          <img
            src="https://images.unsplash.com/photo-1590736969955-71cc94801759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjB3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="top"
          />
        </div>
        <div className="best-header-subtitle">
          <div className="as-gift">
            <h1>For Wife</h1>
            <h1>For Daughter</h1>
            <h1>For Friend</h1>
            <p>Gift the best watch to someone important in your life.</p>
          </div>
          <HashLink to="/item#best">
            <button>
              <h3>See More</h3>
              <MdArrowForwardIos />
            </button>
          </HashLink>
        </div>
      </div>
      <div className="items-wrapper">
        {bestDatas.slice(1, 4).map((data) => (
          <BestItems data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default BestColl;
