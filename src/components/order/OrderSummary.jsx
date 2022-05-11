import React from "react";
import "./OrderSummary.style.scss";

const OrderSummary = () => {
  return (
    <div className="summary-details">
      <div className="summary-details-price">
        <div className="calc-total">
          <h4>Subtotal: </h4>
          <h4>PST(7%): </h4>
          <h4>GST(5%): </h4>
          <h4>Shipmant fee: </h4>
        </div>
        <h3>Total: </h3>
      </div>
      <div className="summary-details-payment-methods">
        
      </div>
    </div>
  );
};

export default OrderSummary;
