import React from "react";
import "./OrderReceipt.style.scss";

const OrderReceipt = ({ userEmail, orderedData }) => {
  return (
    <div className="receipt">
      <div className="receipt-card">
        <div className="receipt-card-details">
          <h3>Your Email: {userEmail}</h3>
          <h3>Your Order No: {orderedData.id}</h3>
        </div>
      </div>
      <p>
        **Customer who choosed <b>Paypal</b> or <b>Interac</b> as a payment
        method will receive email address which you need to send money to.
        Please send payment amount within 72 hours. If we could not confirm your
        payment by after 72 hours, this order will be cancelled automatically.**
      </p>
    </div>
  );
};

export default OrderReceipt;
