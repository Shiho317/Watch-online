import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  RiFacebookBoxLine,
  RiTwitterLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";
import "./Footer.style.scss";
import { AppContext } from "../../App";

const Footer = () => {

  const { setIsCartOpen } = useContext(AppContext);

  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-list">
          <ul>
            <li onClick={() => setIsCartOpen(true)}>
              Your Cart
            </li>
            <li>
              <Link to="/">Your Orders</Link>
            </li>
            <li>
              <Link to="/support">Returns</Link>
            </li>
            <li>
              <Link to="/service">Customer Service</Link>
            </li>
            <li>
              <Link to="/support">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="footer-icon">
          <div className="icon">
            <RiTwitterLine />
          </div>
          <div className="icon">
            <RiFacebookBoxLine />
          </div>
          <div className="icon">
            <RiLinkedinBoxLine />
          </div>
          <div className="icon">
            <RiInstagramLine />
          </div>
        </div>
      </div>
      <div className="copyright">
        <h6>Copyright ©2022 ShihoN All Rights Reserved.</h6>
      </div>
    </div>
  );
};

export default Footer;
