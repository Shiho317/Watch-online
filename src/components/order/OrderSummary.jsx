import React from "react";
import "./OrderSummary.style.scss";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaCreditCard,
} from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import PaymentForm from "./PaymentForm";

const OrderSummary = () => {
  return (
    <div className="summary-details">
      <div className="summary-details-price">
        <div className="calc-total">
          <h4>Subtotal: CA$</h4>
          <h4>PST(7%): CA$</h4>
          <h4>GST(5%): CA$</h4>
          <h4>Shipmant fee: CA$</h4>
        </div>
        <h3>Total: CA$</h3>
      </div>
      <div className="summary-details-payment-methods">
        <h3>Payment</h3>
        <div className="payment-options">
          <div className="payment-options-item">
            <FaCcVisa />
            <p>Visa</p>
          </div>
          <div className="payment-options-item">
            <FaCcMastercard />
            <p>MasterCard</p>
          </div>
          <div className="payment-options-item">
            <FaCcAmex />
            <p>Amex</p>
          </div>
          <div className="payment-options-item">
            <FaCcPaypal />
            <p>Paypal</p>
          </div>
          <div className="payment-options-item">
            <AiOutlineTransaction />
            <p>Interac</p>
          </div>
        </div>
        <PaymentForm/>
      </div>
    </div>
  );
};

export default OrderSummary;
