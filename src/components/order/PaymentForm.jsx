import React from 'react'
import './PaymentForm.style.scss'
import TextField from "@mui/material/TextField";

const PaymentForm = () => {
  return (
    <div className='payment-form'>
      <TextField className='card-no' id="filled-basic" label="Card No." variant="filled" size='small' disabled />
      <TextField className='card-month' id="filled-basic" label="Month" variant="filled" size='small' disabled />
      <TextField className='card-year' id="filled-basic" label="Year" variant="filled" size='small' disabled />
      <TextField className='card-code' id="filled-basic" label="Security Code" variant="filled" size='small' disabled />
    </div>
  )
}

export default PaymentForm