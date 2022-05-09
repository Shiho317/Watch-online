import React, { useState } from "react";
import "./CartItems.style.scss";
import { FiTrash } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../../features/ItemSlice";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();

  const deleteFromCart = () => {
    dispatch(deleteItem(item.id));
  };

  const [isAmount, setIsAmount] = useState(item.amount);

  const onChangeAmount = (e) => {
    dispatch(
      updateItem({
        ...item,
        amount: Number(e.target.value),
      })
    );
    setIsAmount(e.target.value);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt="item" />
      </div>
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>CA${(item.price).toFixed(2)}</p>
        <select name="amount" id="amount" value={isAmount} onChange={(e) => onChangeAmount(e)}>
          <option value={1} >1</option>
          <option value={2} >2</option>
          <option value={3} >3</option>
          <option value={4} >4</option>
          <option value={5} >5</option>
        </select>
        <h4>Total: CA${(item.price * isAmount).toFixed(2)}</h4>
      </div>
      <div className="cart-item-delete" onClick={() => deleteFromCart()}>
        <FiTrash />
      </div>
    </div>
  );
};

export default CartItems;
