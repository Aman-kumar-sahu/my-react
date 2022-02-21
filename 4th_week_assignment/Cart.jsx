import { isDisabled } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import './Cart.css'
const Cart = (props) => {
    // console.log(props)
return (
  <>
    <div class="container ">
      {/* <div className="card mb-3" > */}
  <div className="row g-0">
    <div className="col-md-4">
        
      <img src={props.src} className="img-fluid rounded-start" alt="watch"/>
      <div className="quantity">
      <button id="btn" onClick={props.minus}>-</button>
      <input type="text" id="count" value={props.num} />
      <button id="btn" onClick={props.plus}>+</button>
      </div>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p>Seller:{props.seller}</p>
        <p className="card-text">size:M 
        <h4>₹{props.price}  <span id="discount">₹{props.dis}</span><span id="discount2"> 60% off 1 offer and 1 coupon applied.</span></h4>
        </p>
        <p className="card-text"><small className="text-muted">Free Delivery</small></p>
      </div>
    </div>
  </div>
{/* </div> */}
</div>
  </>
)
}

export default Cart