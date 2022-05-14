import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../Firebase";
import "./OrderComp.style.scss";
import OrderReceipt from "./OrderReceipt";

const OrderComp = () => {
  const orderId = useParams().id;

  const [orderedData, setOrderedData] = useState();

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const getData = async () => {
      getDocs(collection(db, "user"))
        .then((storeData) => {
          const data = storeData.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          const findOrder = data.find((order) => order.id === orderId);
          setOrderedData(findOrder);
          setUserEmail(
            findOrder.orderInfo.find(
              (ele) => Object.keys(ele).includes("email") === true
            ).email
          );
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    getData();
  }, []);

  return (
    <>
      {orderedData ? (
        <div className="order-completed">
          <h1>Order Receipt</h1>
          <div className="order-thank">
            <h2>Thank you for ordering!!</h2>
            <p>
              We sent your receipt to your email address. Please check and save
              your receipt until your order item is arrived.
            </p>
          </div>
          <OrderReceipt userEmail={userEmail} orderedData={orderedData} />
          <div className="order-completed-buttons">
            <Link to="/">
              <button>Back to home</button>
            </Link>
            <Link to='/service'>
              <button>Our Service</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default OrderComp;
