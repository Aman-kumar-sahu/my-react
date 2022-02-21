import React from 'react'
import './Cart.css'
const Card2 = (props) => {
  return (
    <>
   <div className="card border-light mb-3">
  <div className="card-header">Price Detail</div>
  <div className="card-body">
    {/* <h5 className="card-title">Light card title</h5> */}
    <p className="card-text">Price(2 item)<span id="sum">₹{props.price+props.price2}</span></p>
    <p className="card-text">Discount<span id="sum2">-₹{props.dis+props.dis2}</span></p>
    <p className="card-text">Coupons for you<span id="sum3">NA</span></p>
    <p className="card-text">Delivery Charge<span id="sum3">Free</span></p>

    <hr/>
    <h5 className="card-title">Total Amount<span id="sum4">₹{props.price+props.price2}</span></h5>
    <hr/>
    <p id="p-dis">You will save ₹{props.dis+props.dis2} in this order</p>
    <hr />
  </div>
</div>
    </>
  )
}

export default Card2