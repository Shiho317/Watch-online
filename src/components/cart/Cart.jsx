import React from "react";
import CartItems from "./CartItems";
import "./Cart.style.scss";

const Cart = ({ items }) => {
  const totalItemsPrice = items.reduce(
    (acc, cartItem) => acc + cartItem.amount * cartItem.price,
    0
  );

  return (
    <div className="your-cart">
      <h2>Your Cart</h2>
      {items.length === 0 && <p>No item in your cart.</p>}
      <div className="your-cart-items">
        {items.map((item, index) => (
          <CartItems item={item} key={index} />
        ))}
      </div>
      <h3>Cart Total: CA${totalItemsPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
