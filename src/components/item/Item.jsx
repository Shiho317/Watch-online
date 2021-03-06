import React, { useContext, useEffect } from "react";
import BestColls from "./bestColls/BestColls";
import NewArrivals from "./newArrivals/NewArrivals";
import { AppContext } from "../../App";

const Item = () => {
  const { datas, items, getData } = useContext(AppContext);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const newArrivalDatas = datas.filter((data) => data.category.includes("new"));
  const bestCollsDatas = datas.filter((data) => data.category.includes("best"));

  return (
    <>
      <NewArrivals newArrivalDatas={newArrivalDatas} items={items} />
      <BestColls bestCollsDatas={bestCollsDatas} items={items} />
    </>
  );
};

export default Item;
