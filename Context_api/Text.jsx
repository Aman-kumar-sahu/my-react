import React, { useContext } from 'react'
import { ExpenseContext } from '../../expenseContext'

const Text = () => {
    const {entries}= useContext(ExpenseContext);
    const {itemHandle}=useContext(ExpenseContext);
    const {amtHandle}=useContext(ExpenseContext);
    const {submitHandle}=useContext(ExpenseContext);
    // console.log(entries.id);
  return (
    <div>
        <h1>Inputs</h1>
        <form action="">
            <input type="text" placeholder='Enter Food' onChange={itemHandle} value={itemHandle.description}/>
            <br />
            <input type="number" placeholder='Enter amount' onChange={amtHandle} value={amtHandle.amount}/>
            <br />
            <button onClick={submitHandle}>Submit</button>
        </form>
    </div>
  )
}

export default Text