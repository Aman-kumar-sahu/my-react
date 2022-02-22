import { createContext, useReducer } from "react";

export const ReducerContext=new createContext();
const bankingReducer=(state,action)=>{
    switch(action.type){
        case "withdraw":
        return state-parseInt(action.amount);
        case "deposit":
        return state+parseInt(action.amount);
        case "FD":
        return state*1.05;
        default:
           return 0;

    }
};
export const ReducerProvider=(props)=>{
    const [balance,dispatch]=useReducer(bankingReducer,0);
    return(
        <ReducerContext.Provider value={{balance,dispatch}}>{props.children}</ReducerContext.Provider>
    )
};