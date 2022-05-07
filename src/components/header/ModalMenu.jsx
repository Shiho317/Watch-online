import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import "./Modal.style.scss";

const ModalMenu = ({ isOpen }) => {
  return (
    <div className={isOpen ? "modal" : "modal hidden"}>
      <ul>
        <li>
          <NavHashLink to="/item#new">New Arrivals</NavHashLink>
        </li>
        <li>
          <NavHashLink to="/item#best">Best Collections</NavHashLink>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
      </ul>
    </div>
  );
};

export default ModalMenu;
