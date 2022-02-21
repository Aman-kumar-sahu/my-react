import React, { useContext } from 'react'
import { ExpenseContext } from '../../expenseContext'

const List = () => {
    const {entries}=useContext(ExpenseContext);
    const {deleteHandle}=useContext(ExpenseContext);
  return (
    <div>
        <ul>
            {entries.map((item)=>{
                return (
                    <li><h2>{item.name} {item.amount}</h2>
                    <button onClick={()=>deleteHandle(item.id)}>Delete</button>
                    <hr />
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default List