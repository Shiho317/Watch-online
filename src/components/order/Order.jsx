import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../../App";
import "./Order.style.scss";
import OrderSummary from "./OrderSummary";
import ShippingAddress from "./ShippingAddress";

const Order = () => {
  const { items } = useContext(AppContext);

  const totalItemsPrice = items.reduce(
    (acc, cartItem) => acc + cartItem.amount * cartItem.price,
    0
  );

  const [saveSuccess, setSaveSuccess] = useState(false);
  const [shippingFee, setShippingFee] = useState(0);

  const userInfo = useSelector((state) => state.user);

  return (
    <div className="place-order">
      <h1>Order Details</h1>
      <div className="place-order-details">
        <div className="shipping-address">
          <h2>Shipping Address</h2>
          <ShippingAddress
            saveSuccess={saveSuccess}
            setSaveSuccess={setSaveSuccess}
            setShippingFee={setShippingFee}
          />
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <OrderSummary
            saveSuccess={saveSuccess}
            setSaveSuccess={setSaveSuccess}
            totalItemsPrice={totalItemsPrice}
            shippingFee={shippingFee}
            userInfo={userInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
