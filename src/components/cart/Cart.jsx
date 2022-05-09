import React from "react";
import CartItems from "./CartItems";

const Cart = ({ items }) => {
  return (
    <div className="your-cart">
      <h1>Your Cart</h1>
      {items.length === 0 && <p>No item in your cart.</p>}
      <div className="yourcart-items">
        {items.map((item, index) => (
          <CartItems item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
