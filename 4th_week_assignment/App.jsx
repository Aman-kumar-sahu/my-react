import React, { useState } from 'react'
import Card2 from './Component/4th_week_assignment/Card2';
import Cart from './Component/4th_week_assignment/Cart'
import FootPart from './Component/4th_week_assignment/FootPart';
import HeadPart from './Component/4th_week_assignment/HeadPart';
import './App.css'
const App = () => {
  const [dis,setDis]=useState(1199);
  const [dis2,setDis2]=useState(2499);
  const [num,setNum]=useState(1);
    const [num2,setNum2]=useState(1);
    const [price,setPrice]=useState(400);
    const [price2,setPrice2]=useState(1000);
  const plus=()=>{
    setNum(num+1);
      setPrice((num+1)*400);
      setDis((num+1)*1199);
  }
  const minus=()=>{
    if(num>1){
    setNum(num-1);
    }
    if(num-1>0){
    setPrice((num-1)*400);
    setDis((num-1)*1199);
    }
}
const plus2=()=>{
    setNum2(num2+1);
      setPrice2((num2+1)*1000);
      setDis2((num2+1)*2499);
  }
  const minus2=()=>{
    if(num2>1)
    setNum2(num2-1);
    if(num2-1>0){
    setPrice2((num2-1)*1000);
    setDis2((num2-1)*2499);
    }
}
  return (
    <>
    <HeadPart/>
    <div className="My_cart">
      <h5 id="h5">My Cart</h5>
    </div>
    <div className="contain">
      <div className="cart_div">
    <Cart num={num} plus={plus} minus={minus} price={price} dis={dis} src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Munch_RUnning.jpg" name="Campus Dark Shoes" seller="apna bazar"/>
    <Cart num={num2} plus={plus2} minus={minus2} price={price2} dis={dis2} src="https://m.media-amazon.com/images/I/61FxsUbnavL._SL1500_.jpg" name="RealMe Smart Watch" seller="apna bazar"/>
    <div className="Place_order">
      {/* <h5 id="h5">My Cart</h5> */}
      <button type="button" class="btn btn-success">Place Order</button>
    </div>
    </div>
    <div id="cart2">
    <Card2 price={price} price2={price2} dis={dis} dis2={dis2}/>
    </div>
    </div>
    <FootPart/>
    </>
  )
}

export default App