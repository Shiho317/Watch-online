import React, { useContext, useState } from "react";
import HamburgerMenu from "./Hamburger";
import { BiSearch } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import "./Header.style.scss";
import ModalMenu from "./ModalMenu";
import Badge from "@mui/material/Badge";
import { AppContext } from "../../App";

const Header = () => {

  const { setIsCartOpen, items } = useContext(AppContext);

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
          <Badge badgeContent={items.length} color="primary">
            <BsHandbag onClick={() => setIsCartOpen(true)}/>
          </Badge>
        </div>
        <ModalMenu isOpen={isOpen} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Header;
