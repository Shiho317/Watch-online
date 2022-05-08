import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsPatchCheck, BsClockHistory, BsShieldCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Servics.style.scss";

const Service = () => {
  return (
    <div className="our-services">
      <h1>Our Services</h1>
      <hr className="border" />
      <div className="service">
        <div className="service-icon">
          <MdOutlineLocalShipping />
        </div>
        <div className="explanation">
          <p>
            Your shipping fee is changed depends on shipping adress.
            <br />
            Please look at the details below.
          </p>
          <h3>
            North America - $10.00 (3 - 7 days)
            <br />
            South America - $15.00 (7 - 14 days)
            <br />
            Asia, Oceania - $20.00 (14 - 21 days)
            <br />
            Europe - $30.00 (14 - 21 days)
            <br />
          </h3>
          <p>Shipping fee is FREE for orders $200.00+</p>
        </div>
      </div>
      <div className="service">
        <div className="service-icon">
          <BsPatchCheck />
        </div>
        <div className="explanation">
          <h3>100% Authentic.</h3>
          <p>
            We are selling a 100% authentic merchandise.
            <br />
            For making important customers releif and trust us, we import
            merchandise from real brand shop.
            <br />
          </p>
          <p>
            If you have a question about quality of merchandise, please use &nbsp;
          <Link to="/">Customer support.</Link> We take a responsivility about
          quarity of merchandise.
          </p>
        </div>
      </div>
      <div className="service">
        <div className="service-icon">
          <BsClockHistory />
        </div>
        <div className="explanation">
          <p>
            Your order cancellation is FREE within 24 hours from your order. The
            cancellation fee is based on our cancellation policy written below.
          </p>
          <h3>
            Free (order - 24Hours)
            <br />
            5% (24hours - before shipping)
            <br />
            10% (shipping - before arriving)
            <br />
            15% (after arriving)
            <br />
          </h3>
          <p>
            Please contact to <Link to="/">Customer support</Link> for applying
            cancellation.
          </p>
        </div>
      </div>
      <div className="service">
        <div className="service-icon">
          <BsShieldCheck />
        </div>
        <div className="explanation">
          <p>
            We have a confidence about our watch is high quarity and working
            last longer. Thus, we give warranty support to our customer.{" "}
          </p>
          <h3>
            Free exchange support (30days)
            <br />
            Free repair support (1year)
            <br />
            25% discount for repair (3years)
            <br />
          </h3>
          <p>
            If you need warranty support, please contact to{" "}
            <Link to="/">Customer support</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
