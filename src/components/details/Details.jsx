import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../App";
import { addItem, updateItem } from "../../features/ItemSlice";
import "./Details.style.scss";

const Details = () => {
  const { datas, items } = useContext(AppContext);

  const itemId = useParams();

  const currItem = datas.find((data) => data.id === itemId.id);

  const [currItemAmount, setCurrItemAmount] = useState(1);

  const onChangeHandler = (e) => {
    setCurrItemAmount(e.target.value);
  };

  const dispatch = useDispatch();
  const checkInCart = items.find((watch) => watch.id === currItem.id);

  const addCurrItem = () => {
    if (checkInCart) {
      dispatch(
        updateItem({
          ...currItem,
          amount: checkInCart.amount + Number(currItemAmount),
        })
      );
    } else {
      dispatch(
        addItem({
          id: currItem.id,
          company: currItem.company,
          desc: currItem.desc,
          image: currItem.image,
          name: currItem.name,
          price: currItem.price,
          amount: Number(currItemAmount),
        })
      );
    }
  };

  return (
    <div className="curr-item">
      <div className="curr-item-image">
        <img src={currItem.image} alt="curr-item" />
        {!currItem.available ? <p className="stock-label">Out of stock</p> : currItem.stock <= 5 && <p className="stock-label">Only {currItem.stock} left</p>}
      </div>
      <div className="curr-item-contents">
        <div className="curr-item-details">
          <h3>{currItem.company}</h3>
          <h2>{currItem.name}</h2>
          <p>{currItem.desc}</p>
          <h3>CA${(currItem.price).toFixed(2)}</h3>
          <select
            name="amount"
            id="amount"
            value={currItemAmount}
            onChange={(e) => onChangeHandler(e)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <h4>Total: CA${(currItem.price * currItemAmount).toFixed(2)}</h4>
        </div>
        <div className="curr-item-buttons">
          <Link to="/item">
            <button type="button">Go Back</button>
          </Link>
          <button
            type="button"
            disabled={!currItem.available}
            style={{ opacity: !currItem.available ? 0.5 : 1 }}
            onClick={() => addCurrItem()}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
