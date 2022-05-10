import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../features/ItemSlice";
import "./CheckoutItems.style.scss";

const CheckoutItems = ({ orderItem, setIsCartOpen }) => {
  const dispatch = useDispatch();

  const deleteFromCart = () => {
    dispatch(deleteItem(orderItem.id));
  };

  return (
    <div className="orderItem">
      <div className="orderItem-img">
        <img src={orderItem.image} alt="order-item" />
      </div>
      <div className="orderItem-details">
        <h3>{orderItem.name}</h3>
        <p>{orderItem.company}</p>
        <p>CA${orderItem.price.toFixed(2)}</p>
        <p>Amount: {orderItem.amount}</p>
        <h4>Total: CA${(orderItem.price * orderItem.amount).toFixed(2)}</h4>
        <div className="orderItem-buttons">
          <button onClick={() => deleteFromCart()}>
            Delete from your cart
          </button>
          <button onClick={() => setIsCartOpen(true)}>Change amount</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
