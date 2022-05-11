import React from "react";
import "./Order.style.scss";
import OrderSummary from "./OrderSummary";
import ShippingAddress from "./ShippingAddress";

const Order = () => {
  return (
    <div className="place-order">
      <h1>Order Details</h1>
      <div className="place-order-details">
        <div className="shipping-address">
          <h2>Shipping Address</h2>
          <ShippingAddress/>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <OrderSummary/>
        </div>
      </div>
      
    </div>
  );
};

export default Order;
