import React, { useContext } from "react";
import BestColls from "./bestColls/BestColls";
import NewArrivals from "./newArrivals/NewArrivals";
import { AppContext } from "../../App";

const Item = () => {
  const { datas } = useContext(AppContext);

  const newArrivalDatas = datas.filter((data) => data.category.includes("new"));
  const bestCollsDatas = datas.filter((data) => data.category.includes("best"));

  return (
    <>
      <NewArrivals newArrivalDatas={newArrivalDatas} />
      <BestColls bestCollsDatas={bestCollsDatas} />
    </>
  );
};

export default Item;
