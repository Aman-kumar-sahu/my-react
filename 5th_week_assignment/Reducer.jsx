import { useState } from "react";
import { combineReducers } from "redux";

const initState=[];
export const calorieReducer=(state=initState,action)=>{
    switch(action.type){
        case "Add_Entries":
            return ([...state,{...action.event,id:Math.floor(Math.random()*999)}]);
        case "Delete_Entries":
            return state.filter((item)=>item.id!==action.id);
        default:
            return state;
    }
}
export const reactReducer=combineReducers({
    calorie:calorieReducer
});