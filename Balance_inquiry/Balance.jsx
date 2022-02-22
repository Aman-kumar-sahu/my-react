import React, { useContext } from 'react'
import { BalanceContext } from '../../balanceContext';

const Balance = () => {
    const {withdrawHandle}=useContext(BalanceContext);
    const {inputHandle}=useContext(BalanceContext);
    const {val}=useContext(BalanceContext);
    const {bal}=useContext(BalanceContext);
    const {depositHandle}=useContext(BalanceContext);
    const {fixedHandle}=useContext(BalanceContext);
    const {deleteHandle}=useContext(BalanceContext);
  return (
    <div>
        <h1>Balance = {bal}</h1>
        <input type="number" onChange={inputHandle} value={val}/>
        <button onClick={withdrawHandle}>Withdraw</button>
        <button onClick={depositHandle}>Diposit</button>
        <button onClick={fixedHandle}>Fixed</button>
        <button onClick={deleteHandle}>Delete Account</button>
    </div>
  )
}

export default Balance