import React from 'react'
import "./Cart.css"
const HeadPart = () => {
  return (
      <>
      <nav className="navbar navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" id="brand">Best Deal</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </>
    
  )
}

export default HeadPart