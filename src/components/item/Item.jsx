import React, { useContext } from "react";
import BestColls from "./bestColls/BestColls";
import NewArrivals from "./newArrivals/NewArrivals";
import { AppContext } from "../../App";
import Drawer from "@mui/material/Drawer";
import Cart from "../cart/Cart";

const Item = () => {
  const { datas, isCartOpen, setIsCartOpen, items } = useContext(AppContext);

  const newArrivalDatas = datas.filter((data) => data.category.includes("new"));
  const bestCollsDatas = datas.filter((data) => data.category.includes("best"));

  console.log(items);

  return (
    <>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <Cart items={items} />
      </Drawer>
      <NewArrivals newArrivalDatas={newArrivalDatas} />
      <BestColls bestCollsDatas={bestCollsDatas} />
    </>
  );
};

export default Item;
