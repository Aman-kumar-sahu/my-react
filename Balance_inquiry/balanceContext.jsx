import { createContext, useState } from "react";

export const BalanceContext=new createContext();
export const BalanceProvider=(props)=>{
    const [bal,setBal]=useState(1000);
    const [val,setVal]=useState("");
    const withdrawHandle=()=>{
        const newBal=bal-val;
        setBal(newBal);
        setVal("");
    }
    const inputHandle=(event)=>{
        setVal(event.target.value); 
    }
    const depositHandle=()=>{
        const newBal=bal+parseInt(val);
        setBal(newBal);
        setVal("");
    }
    const fixedHandle=()=>{
        const newBal=0.3*parseInt(val)+bal;
        setBal(newBal);
        setVal("");
    }
    const deleteHandle=()=>{
        const newBal=0;
        setBal(newBal);
    }
return (
    <BalanceContext.Provider value={{bal,val,withdrawHandle,inputHandle,depositHandle,fixedHandle,deleteHandle}}>
        {props.children}
    </BalanceContext.Provider>
)
}