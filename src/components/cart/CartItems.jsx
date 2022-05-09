import React from "react";
import './CartItems.style.scss';
import { FiTrash } from 'react-icons/fi'

const CartItems = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt='item' />
      </div>
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>CA${item.price}</p>
        <select name="amount" id="amount">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <h4>Total: </h4>
      </div>
      <div className="cart-item-delete">
        <FiTrash/>
      </div>
    </div>
  );
};

export default CartItems;
