import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.css'

function Header() {

  const myDropdown = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  return (
    <div className="container-fluid d-flex justify-content-between py-2 header">
      <h2 className="ms-2 logo">De-Ferdinands</h2>

      <nav className=" dropdown">
        <div className="dropbtn" onClick={myDropdown}>&#9776;</div>
        <ul className="d-flex justify-content-between dropdown-content" id="myDropdown">
            <li className="me-5"><Link to="/">Home</Link></li>
            <li className="me-5"><Link to="#">Place an order</Link></li>
            <li className="me-5"><Link to="/about">About Us</Link></li>
            <li className="me-2"><Link to="/contact">Contact Us</Link></li>
          </ul>
      </nav>

    </div>
  )
}

export default Header
