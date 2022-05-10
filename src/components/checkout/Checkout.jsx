import React, { useContext } from "react";
import { AppContext } from "../../App";
import "./Checkout.style.scss";
import CheckoutItems from "./CheckoutItems";

const Checkout = () => {
  const { items, setIsCartOpen } = useContext(AppContext);

  const totalItemsPrice = items.reduce(
    (acc, cartItem) => acc + cartItem.amount * cartItem.price,
    0
  );

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
            <h2>Your total pay: CA${totalItemsPrice.toFixed(2)}</h2>
            <div className="checkout-pay">
              <h3>Pay with: </h3>
              <button>Credit Card</button>
              <button>Paypal</button>
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
