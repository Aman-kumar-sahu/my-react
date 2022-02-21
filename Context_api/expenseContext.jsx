import { createContext, useState } from "react";

export const ExpenseContext=new createContext();

export const ExpenseProvider=(props)=>{
    const [entries,setEntries]=useState([
        { id:1,name:"pizza",amount:-50 },
        { id:2,name:"pizza",amount:-50 },
        { id:3,name:"pizza",amount:-50 },
        { id:4,name:"Salary",amount: 200 },
        { id:5,name:"Stocks",amount: 50 }
    ]);
    const [item,setItem]=useState("");
    const [amt,setAmt]=useState(0);
    const [ide,setId]=useState(6);
    const deleteHandle=(id)=>{
        setEntries(entries.filter(item=>item.id!==id))
    }
    const itemHandle=(event)=>{
        // console.log(event.target.value);
        setItem(event.target.value);
    }
    const amtHandle=(event)=>{
        // console.log(event.target.key);
        setAmt(event.target.value);
    }
    const submitHandle=(event)=>{
        event.preventDefault();
        setId(ide+1);
        setEntries([...entries,{id:ide,name:item,amount:parseInt(amt)}]);
        console.log("clicked")
        console.log(entries);
    }
    return(
        <ExpenseContext.Provider value={{entries,itemHandle,deleteHandle,amtHandle,submitHandle}}>
            {props.children}
        </ExpenseContext.Provider>
    )
}