import React, { useContext } from 'react'
import { ExpenseContext } from '../../expenseContext'

const Expenses = () => {
    const { entries }=useContext(ExpenseContext);
    let income=0;
    let expense=0;
    // console.log(entries);
    const totalBal=entries.reduce((previousValue,currentValue)=>
        previousValue+currentValue.amount,0
    );
    entries.forEach((elem)=>{
        if(elem.amount>0)
        income=income+elem.amount;
        else
        expense=expense+elem.amount;
    });
  return (
    <div><h1>Expenses</h1>
    <h2>{totalBal}</h2>
    <h1>Income</h1>
    <h2>{income}</h2>
    <h1>Expense</h1>
    <h2>{expense}</h2>
    </div>
  )
}

export default Expenses