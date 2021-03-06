import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./ShippingAddress.style.scss";
import { useDispatch } from "react-redux";
import { addInfo } from "../../features/UserInfoSlice";

const ShippingAddress = ({ saveSuccess, setSaveSuccess, setShippingFee }) => {
  const [areacode, setAreacode] = useState("");

  const [shippingInfo, setShippingInfo] = useState({
    firstname: "",
    lastname: "",
    phone: {
      areacode: "",
      number: "",
    },
    email: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    zip: "",
  });

  const dispatch = useDispatch();

  const addUserShipping = (e) => {
    e.preventDefault();
    dispatch(addInfo(shippingInfo));
    setSaveSuccess(true);
    switch (areacode) {
      case "+1":
        setShippingFee(10);
        break;
      case "+33":
      case "+39":
      case "+44":
        setShippingFee(30);
        break;
      case "+55":
        setShippingFee(15);
        break;
      case "+61":
      case "+81":
      case "+82":
      case "+86":
        setShippingFee(20);
        break;
      default:
        setShippingFee(10);
    }
  };

  return (
    <form
      onSubmit={(e) => addUserShipping(e)}
      style={{ opacity: saveSuccess ? 0.5 : 1 }}
    >
      <TextField
        required
        id="outlined-required"
        label="First Name"
        className="firstname"
        onChange={(e) =>
          setShippingInfo({ ...shippingInfo, firstname: e.target.value })
        }
      />
      <TextField
        required
        id="outlined-required"
        label="Last Name"
        className="lastname"
        onChange={(e) =>
          setShippingInfo({ ...shippingInfo, lastname: e.target.value })
        }
      />
      <div className="phone-number">
        <select name="area-code" onChange={(e) => setAreacode(e.target.value)}>
          <option value="+1">US +1</option>
          <option value="+1">CA +1</option>
          <option value="+33">FR +33</option>
          <option value="+39">IT +39</option>
          <option value="+44">UK +44</option>
          <option value="+55">BR +55</option>
          <option value="+61">AU +61</option>
          <option value="+81">JP +81</option>
          <option value="+82">KOR +82</option>
          <option value="+86">CN +86</option>
        </select>
        <TextField
          required
          id="outlined-required"
          label="Phone Number"
          onChange={(e) =>
            setShippingInfo({
              ...shippingInfo,
              phone: { areacode: areacode, number: e.target.value },
            })
          }
        />
      </div>
      <TextField
        required
        id="outlined-required"
        label="Email"
        className="email"
        onChange={(e) =>
          setShippingInfo({ ...shippingInfo, email: e.target.value })
        }
      />
      <TextField
        required
        id="outlined-required"
        label="Address1"
        className="address1"
        onChange={(e) =>
          setShippingInfo({ ...shippingInfo, address1: e.target.value })
        }
      />
      <TextField
        id="outlined-required"
        label="Address2"
        placeholder="Building/Apartment/Suite no,Unit,Floor.etc(optional)"
        className="address2"
        onChange={(e) =>
          setShippingInfo({ ...shippingInfo, address2: e.target.value })
        }
      />
      <TextField
        required
        id="outlined-required"
        label="State/Province"
        className="state"
        onChange={(e) =>
          setShippingInfo({ ...shippingInfo, state: e.target.value })
        }
      />
      <TextField
        required
        id="outlined-required"
        label="City"
        className="city"
        onChange={(e) =>
          setShippingInfo({ ...shippingInfo, city: e.target.value })
        }
      />
      <TextField
        required
        id="outlined-required"
        label="Post/Zip Code"
        className="zip"
        onChange={(e) =>
          setShippingInfo({ ...shippingInfo, zip: e.target.value })
        }
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ShippingAddress;
