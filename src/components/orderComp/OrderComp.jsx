import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../Firebase";
import "./OrderComp.style.scss";
import OrderReceipt from "./OrderReceipt";
import { AppContext } from "../../App";

const OrderComp = () => {
  const { datas } = useContext(AppContext);

  const orderId = useParams().id;

  const [orderedData, setOrderedData] = useState();

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    let orderedItems;

    const getData = async () => {
      await getDocs(collection(db, "user"))
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
          orderedItems = findOrder.orderInfo.find(
            (ele) => Object.keys(ele).includes("order") === true
          );
          orderedItems.order.map((item) => {
            const originalData = datas.find((ele) => ele.id === item.id);
            const orderedRef = doc(db, "watches", item.id);
            updateDoc(orderedRef, {
              stock: originalData.stock - item.amount,
              available: originalData.stock - item.amount === 0 ? false : true,
            });
            return console.log("success");
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    getData();
    // eslint-disable-next-line
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
            <Link to="/service">
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
