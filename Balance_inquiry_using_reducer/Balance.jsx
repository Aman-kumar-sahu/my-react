import React, { useContext, useState } from 'react'
import { ReducerContext } from '../../ReducerContext'

const Balance = () => {
    const {balance,dispatch}=useContext(ReducerContext);
    const [amount,setAmount]=useState("");
  return (
    <div>
         <h1>Balance is {balance}</h1>
        <input type="text" value={amount} onChange={(e)=>{setAmount(e.target.value)}} />
        <button onClick={()=>dispatch({type:"withdraw",amount},setAmount(""))}>Withdraw</button>
        <button onClick={()=>dispatch({type:"deposit",amount},setAmount(""))}>Deposite</button>
        <button onClick={()=>dispatch({type:"FD",amount},setAmount(""))}>Fixed Deposite</button>
        <button onClick={()=>dispatch({type:"delete",amount},setAmount(""))}>Delete</button>
    </div>
  )
}

export default Balance