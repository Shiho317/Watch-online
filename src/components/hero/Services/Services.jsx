import React from "react";
import "./Services.style.scss";
import { MdOutlineLocalShipping, MdArrowForwardIos } from "react-icons/md";
import { BsPatchCheck, BsClockHistory } from "react-icons/bs";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-icons">
        <div className="icon">
          <MdOutlineLocalShipping />
          <p>Shipping</p>
        </div>
        <div className="icon">
          <BsPatchCheck />
          <p>Authentic</p>
        </div>
        <div className="icon">
          <BsClockHistory />
          <p>Cancellation</p>
        </div>
      </div>
      <Link to="/service">
        <button>
          <h3>See More</h3>
          <MdArrowForwardIos />
        </button>
      </Link>
    </div>
  );
};

export default Services;
