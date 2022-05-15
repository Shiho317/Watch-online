import React, { useState } from "react";
import "./OrderSummary.style.scss";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import PaymentForm from "./PaymentForm";
import { useDispatch } from "react-redux";
import { addInfo, resetInfo } from "../../features/UserInfoSlice";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase";
import { resetItem } from "../../features/ItemSlice";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({
  saveSuccess,
  totalItemsPrice,
  shippingFee,
  userInfo,
}) => {
  const pst = totalItemsPrice * 0.07;
  const gst = totalItemsPrice * 0.05;

  const dispatch = useDispatch();

  const [card, setCard] = useState("");
  const [cardno, setCardno] = useState(0);
  const [cardex, setCardex] = useState({
    month: 0,
    year: 0,
  });
  const [cardcode, setCardcode] = useState(0);

  const addUserCardInfo = (e) => {
    e.preventDefault();
    dispatch(
      addInfo({
        card,
        cardno,
        cardex,
        cardcode,
      })
    );
    setIsNotCard(true);
  };

  const [isNotCard, setIsNotCard] = useState(true);

  const payWithCard = (value) => {
    setIsNotCard(false);
    setCard(value);
  };

  const payWithNotCard = (value) => {
    setIsNotCard(true);
    setCard(value);
  };

  const navigate = useNavigate();

  const addUserInfoFireStore = async () => {
    const addUserInfo = await addDoc(collection(db, "user"), {
      orderInfo: userInfo,
    });
    console.log("Data store Id: ,", addUserInfo.id);
    dispatch(resetItem());
    dispatch(resetInfo());
    setTimeout(() => {
      navigate(`/ordered/${addUserInfo.id}`);
    }, 1000);
  };

  return (
    <div className="summary-details" style={{ opacity: saveSuccess ? 1 : 0.5 }}>
      <div className="summary-details-price">
        <div className="calc-total">
          <p>Subtotal: CA${totalItemsPrice.toFixed(2)}</p>
          <p>PST(7%): CA${pst.toFixed(2)}</p>
          <p>GST(5%): CA${gst.toFixed(2)}</p>
          <p>Shipmant fee: CA${shippingFee.toFixed(2)}</p>
        </div>
        <h4>
          Total: CA${(totalItemsPrice + pst + gst + shippingFee).toFixed(2)}
        </h4>
      </div>
      <div className="summary-details-payment-methods">
        <h3>Choose Payment</h3>
        <div
          className="payment-options"
          style={{ pointerEvents: saveSuccess ? "auto" : "none" }}
        >
          <div
            className="payment-options-item"
            style={
              card === "visa"
                ? { backgroundColor: "#bfb2ab", color: "white" }
                : { backgroundColor: "white", color: "#bfb2ab" }
            }
            onClick={() => payWithCard("visa")}
          >
            <FaCcVisa />
            <p>Visa</p>
          </div>
          <div
            className="payment-options-item"
            style={
              card === "mastercard"
                ? { backgroundColor: "#bfb2ab", color: "white" }
                : { backgroundColor: "white", color: "#bfb2ab" }
            }
            onClick={() => payWithCard("mastercard")}
          >
            <FaCcMastercard />
            <p>MasterCard</p>
          </div>
          <div
            className="payment-options-item"
            style={
              card === "amex"
                ? { backgroundColor: "#bfb2ab", color: "white" }
                : { backgroundColor: "white", color: "#bfb2ab" }
            }
            onClick={() => payWithCard("amex")}
          >
            <FaCcAmex />
            <p>Amex</p>
          </div>
          <div
            className="payment-options-item"
            style={
              card === "paypal"
                ? { backgroundColor: "#bfb2ab", color: "white" }
                : { backgroundColor: "white", color: "#bfb2ab" }
            }
            onClick={() => payWithNotCard("paypal")}
          >
            <FaCcPaypal />
            <p>Paypal</p>
          </div>
          <div
            className="payment-options-item"
            style={
              card === "interac"
                ? { backgroundColor: "#bfb2ab", color: "white" }
                : { backgroundColor: "white", color: "#bfb2ab" }
            }
            onClick={() => payWithNotCard("interac")}
          >
            <AiOutlineTransaction />
            <p>Interac</p>
          </div>
          <button
            className="payNow"
            disabled={card !== "" && isNotCard ? false : true}
            style={{ opacity: card === "" || !isNotCard ? 0.5 : 1 }}
            onClick={() => addUserInfoFireStore()}
          >
            Pay Now
          </button>
        </div>
        <PaymentForm
          isNotCard={isNotCard}
          setCardno={setCardno}
          cardex={cardex}
          setCardex={setCardex}
          setCardcode={setCardcode}
          addUserCardInfo={addUserCardInfo}
        />
      </div>
    </div>
  );
};

export default OrderSummary;
