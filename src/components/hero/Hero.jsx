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
              A watch...Tells you the time.
              <br />
              Tells you the time. It is your fashion. It gives you confidence.
              <br />
              Are you looking for the best watch for yourself, or for someone special? <br/>
              We are here to help you.
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
