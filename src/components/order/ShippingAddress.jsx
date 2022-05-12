import React from "react";
import TextField from "@mui/material/TextField";
import './ShippingAddress.style.scss'

const ShippingAddress = () => {
  return (
    <form>
      <TextField
        required
        id="outlined-required"
        label="First Name"
        className="firstname"
      />
      <TextField
        required
        id="outlined-required"
        label="Last Name"
        className="lastname"
      />
      <div className="phone-number">
        <select name="area-code">
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
        <TextField required id="outlined-required" label="Phone Number" />
      </div>
      <TextField
        required
        id="outlined-required"
        label="Email"
        className="email"
      />
      <TextField
        required
        id="outlined-required"
        label="Address1"
        className="address1"
      />
      <TextField
        id="outlined-required"
        label="Address2"
        placeholder="Building/Apartment/Suite no,Unit,Floor.etc(optional)"
        className="address2"
      />
      <TextField
        required
        id="outlined-required"
        label="State/Province"
        className="state"
      />
      <TextField
        required
        id="outlined-required"
        label="City"
        className="city"
      />
      <TextField
        required
        id="outlined-required"
        label="Post/Zip Code"
        className="zip"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ShippingAddress;
