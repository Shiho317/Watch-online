import React, { useContext } from "react";
import BestColl from "./BestCollections/BestColl";
import NewArr from "./newArrivals/NewArr";
import Services from "./Services/Services";
import "./Hero.style.scss";
import { AppContext } from "../../App";

const Hero = () => {
  const { datas } = useContext(AppContext);
  const newArrDatas = datas.filter((data) => data.category.includes("new"));
  const bestDatas = datas.filter((data) => data.category.includes("best"));

  return (
    <>
      <div className="hero">
        <div className="hero-white">
          <div className="hero-title">
            <h1>A Watch Makes You More Attractive</h1>
            <p>
              A watch...
              <br />
              tells you a time, part of your fashion, makes you a confidence.
              <br />
              Are you looking for the best watch for you? <br />
              We would like to help you.
            </p>
          </div>
        </div>
        <div className="hero-brown"></div>
        <div className="hero-img">
          <img
            src="https://www.rakuten.ne.jp/gold/theclockhouse/campaign/casual/lca1004-bk1.gif"
            alt="hero-gif"
          />
        </div>
      </div>
      <NewArr newArrDatas={newArrDatas} />
      <BestColl bestDatas={bestDatas} />
      <Services />
    </>
  );
};

export default Hero;
