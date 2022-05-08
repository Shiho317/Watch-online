import React, { useState } from "react";
import HamburgerMenu from "./Hamburger";
import { BiSearch } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import "./Header.style.scss";
import ModalMenu from "./ModalMenu";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const clickHandler = () => setOpen((prev) => !prev);

  return (
    <>
      <div className="header">
        <div style={{ position: "relative", zIndex: 100 }}>
          <HamburgerMenu
            clickHandler={clickHandler}
            isOpen={isOpen}
            setOpen={setOpen}
          />
        </div>
        <div className="header-icons">
          <BiSearch />
          <BsHandbag />
        </div>
        <ModalMenu isOpen={isOpen} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Header;
