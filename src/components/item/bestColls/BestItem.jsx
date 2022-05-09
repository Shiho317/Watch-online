import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../../features/ItemSlice";
import "./BestItem.style.scss";

const BestItem = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      addItem({
        id: item.id,
        company: item.company,
        desc: item.desc,
        image: item.image,
        name: item.name,
        price: item.price,
      })
    );
  };

  const buyNow = () => {
    console.log("able");
  };

  return (
    <div className="best-item">
      <div className="best-item-image">
        <img src={item.image} alt="item" />
        {!item.available && <p className="stock-label">Out of stock</p>}
      </div>
      <div className="best-item-details">
        <h3>{item.company}</h3>
        <h4>{item.name}</h4>
        <h4>CA${item.price.toFixed(2)}</h4>
      </div>
      <div className="buttons">
        <button
          type="button"
          disabled={!item.available}
          style={{ opacity: !item.available ? 0.5 : 1 }}
          onClick={() => addToCart()}
        >
          Add To Cart
        </button>
        <button
          type="button"
          disabled={!item.available}
          style={{ opacity: !item.available ? 0.5 : 1 }}
          onClick={() => buyNow()}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BestItem;
