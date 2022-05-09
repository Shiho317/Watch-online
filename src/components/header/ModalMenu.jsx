import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./Modal.style.scss";

const ModalMenu = ({ isOpen, setOpen }) => {
  return (
    <div className={isOpen ? "modal" : "modal hidden"}>
      <ul>
        <li onClick={() => setOpen(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setOpen(false)}>
          <HashLink to="/item#new">New Arrivals</HashLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <HashLink to="/item#best">Best Collections</HashLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <Link to="/service">Our Services</Link>
        </li>
      </ul>
    </div>
  );
};

export default ModalMenu;
