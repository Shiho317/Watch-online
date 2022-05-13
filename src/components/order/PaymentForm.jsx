import React from "react";
import "./PaymentForm.style.scss";
import TextField from "@mui/material/TextField";

const PaymentForm = ({
  isNotCard,
  setCardno,
  cardex,
  setCardex,
  setCardcode,
  addUserCardInfo,
}) => {
  return (
    <form
      className="payment-form"
      style={{ opacity: isNotCard ? 0.5 : 1 }}
      onSubmit={(e) => addUserCardInfo(e)}
    >
      <TextField
        className="card-no"
        id="filled-basic"
        label="Card No."
        variant="filled"
        size="small"
        disabled={isNotCard}
        required
        onChange={(e) => setCardno(e.target.value)}
      />
      <TextField
        className="card-month"
        id="filled-basic"
        label="Month"
        variant="filled"
        size="small"
        disabled={isNotCard}
        required
        onChange={(e) => setCardex({ ...cardex, month: e.target.value })}
      />
      <TextField
        className="card-year"
        id="filled-basic"
        label="Year"
        variant="filled"
        size="small"
        disabled={isNotCard}
        required
        onChange={(e) => setCardex({ ...cardex, year: e.target.value })}
      />
      <TextField
        className="card-code"
        id="filled-basic"
        label="Security Code"
        variant="filled"
        size="small"
        disabled={isNotCard}
        required
        onChange={(e) => setCardcode(e.target.value)}
      />
      <button
        type="submit"
        disabled={isNotCard}
        style={{ pointerEvents: !isNotCard ? "auto" : "none" }}
      >
        Save
      </button>
    </form>
  );
};

export default PaymentForm;
