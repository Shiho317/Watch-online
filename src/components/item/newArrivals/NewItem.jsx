import React from "react";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "../../../features/ItemSlice";
import "./NewItem.style.scss";

const NewItem = ({ item, items }) => {
  const dispatch = useDispatch();

  const clickedWatch = items.find((watch) => watch.id === item.id);

  const addToCart = () => {
    if (clickedWatch) {
      dispatch(
        updateItem({
          ...item,
          amount: clickedWatch.amount + 1,
        })
      );
    } else {
      dispatch(
        addItem({
          id: item.id,
          company: item.company,
          desc: item.desc,
          image: item.image,
          name: item.name,
          price: item.price,
          amount: 1,
        })
      );
    }
  };

  return (
    <div className="new-item">
      <div className="new-item-image">
        <img src={item.image} alt="item" />
        {!item.available && <p className="stock-label">Out of stock</p>}
      </div>
      <div className="new-item-details">
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
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default NewItem;
