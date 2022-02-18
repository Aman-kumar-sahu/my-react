import React, { useState } from 'react'
import Contacts from './Component/Contact/Contacts'

const App = () => {
  const [name,setName]=useState("");
  const [mail,setMail]=useState("");
  const [contacts,setContacts]=useState([
    {
      name:"Ravan",
      email:"ra@v.com"
    },
    {
      name:"Gvan",
      email:"Ga@v.com"
    },{
      name:"pavan",
      email:"pa@v.com"
    }
  ])
  // console.log(contacts);
  const clickHandle=(event)=>{
    event.preventDefault();
    // console.log("Clicked");
    // const newContact=[...contacts];
    setContacts([...contacts,{name:name,email:mail}]);
    setName("");
    setMail("");
    console.log(contacts);
  }
  const nameHandle=(event)=>{
    setName(event.target.value);
  }
  const emailHandle=(event)=>{
    setMail(event.target.value);
  }
  const deleteHandle=(emailid)=>{
    const oldContact=[...contacts];
    const newContact=oldContact.filter(el=>el.email!==emailid);
    setContacts(newContact);
  }
  const editHandle=(emailid)=>{
    const oldContact=[...contacts];
    const index=oldContact.findIndex(el=>el.email===emailid);
    oldContact[index]={name:name,email:mail};
    if(name!=="" && mail!=="")
    setContacts(oldContact);
    setName("");
    setMail("");
  }
  return (
    <>
    <div className="container">
      <form action="">
        <input type="text" placeholder='Name' onChange={nameHandle} value={name}/>
        <br />
        <input type="email" placeholder='Email' onChange={emailHandle} value={mail}/>
        <br />
        <button onClick={clickHandle}>Select</button>
      </form>
    </div>
    <Contacts contact={contacts} delete={deleteHandle} edit={editHandle}/>
    </>
  )
}

export default App