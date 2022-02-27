import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addEntries } from '../Redux_Actions/Action';

const AddInput = () => {
  const [item,setItem]=useState("");
  const [cal,setCal]=useState(0);
  const dispatch=useDispatch();
  const submitHandle=(e)=>{
    e.preventDefault();
    console.log("clicked");
    dispatch(addEntries({item,cal}));
  }
  // console.log(cal);
  return (
    <div>
      <form>
  <div className="mb-3">
    <label className="form-label">Add Item</label>
    <input type="text" className="form-control" value={item} onChange={(event)=>{setItem(event.target.value)}}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Calorie</label>
    <input type="text" className="form-control" value={cal} onChange={(event)=>{setCal(event.target.value)}}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
</form>
    </div>
  )
}

export default AddInput