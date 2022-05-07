import React from "react";
import { Squash as Hamburger } from "hamburger-react";

const HamburgerMenu = ({ isOpen, setOpen, clickHandler }) => {
  return <Hamburger toggled={isOpen} toggle={setOpen} onClick={clickHandler} />;
};

export default HamburgerMenu;
