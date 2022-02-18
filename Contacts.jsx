import React from 'react'

const Contacts = (props) => {
    // console.log(props);
  return (
      <>
      <ul className="list-group">
          {props.contact.map(item=>{
             return( <li className="list-group-item">{item.name} {item.email}
             <button type="button" className="btn btn-danger ms-3" onClick={()=>props.delete(item.email)}>Delete</button>
             <button type="button" className="btn btn-primary ms-3" onClick={()=>props.edit(item.email)}>Edit</button>
             </li>
             )
          })}
      </ul>
      </>
    
  )
}

export default Contacts