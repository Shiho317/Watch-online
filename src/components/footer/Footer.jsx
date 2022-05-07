import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine, RiTwitterLine, RiInstagramLine, RiLinkedinBoxLine } from 'react-icons/ri'
import "./Footer.style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-list">
          <ul>
            <li>
              <Link to="/cart">Your Cart</Link>
            </li>
            <li>
              <Link to="/">Your Orders</Link>
            </li>
            <li>
              <Link to="/service">Returns</Link>
            </li>
            <li>
              <Link to="/service">Customer Service</Link>
            </li>
            <li>
              <Link to="/service">Contacts</Link>
            </li>
          </ul>
        </div>
        <div class="footer-icon">
          <div class="icon">
            <RiTwitterLine />
          </div>
          <div class="icon">
            <RiFacebookBoxLine />
          </div>
          <div class="icon">
            <RiLinkedinBoxLine />
          </div>
          <div class="icon">
            <RiInstagramLine />
          </div>
        </div>
      </div>
      <div class="copyright">
        <h6>Copyright ©2022 ShihoN All Rights Reserved.</h6>
      </div>
    </div>
  );
};

export default Footer;
