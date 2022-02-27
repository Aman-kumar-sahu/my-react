import React from 'react'
import { useSelector } from 'react-redux'
import Entry from './Entry';

const AddEntries = () => {
  const entries=useSelector((state)=>state.calorie);
  console.log(entries);
  return (
    <div>
      {entries.map((el)=>{
        return(
          <Entry entry={el}/>
        )
      })}
    </div>
  )
}

export default AddEntries