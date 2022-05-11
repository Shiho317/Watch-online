import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import "./Checkout.style.scss";
import CheckoutItems from "./CheckoutItems";

const Checkout = () => {
  const { items, setIsCartOpen } = useContext(AppContext);

  const totalItemsPrice = items.reduce(
    (acc, cartItem) => acc + cartItem.amount * cartItem.price,
    0
  );

  const pst = totalItemsPrice * 0.07;
  const gst = totalItemsPrice * 0.05;

  return (
    <div className="checkout">
      <h1>Your Order</h1>
      {items.length > 0 ? (
        <>
          {items.map((orderItem) => (
            <CheckoutItems
              key={orderItem.id}
              orderItem={orderItem}
              setIsCartOpen={setIsCartOpen}
            />
          ))}
          <div className="checkout-details">
            <h2>Subtotal: CA${(totalItemsPrice + pst + gst).toFixed(2)}</h2>
            <div className="checkout-pay">
              <Link to='/'>
                <button>Continue Shopping</button>
              </Link>
              <Link to='/order'>
                <button>Place Order</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <h2 className="no-item">No item in your cart.</h2>
      )}
    </div>
  );
};

export default Checkout;
