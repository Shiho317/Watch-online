import React, { useContext } from "react";
import CartItems from "./CartItems";
import "./Cart.style.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const Cart = ({ items }) => {
  const { setIsCartOpen } = useContext(AppContext);

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
      <Link
        to="/checkout"
        className="your-cart-button"
        onClick={() => setIsCartOpen(false)}
      >
        <button
          disabled={items.length > 0 ? false : true}
          style={{ opacity: items.length > 0 ? 1 : 0.5 }}
        >
          Check Out({items.length})
        </button>
      </Link>
    </div>
  );
};

export default Cart;
