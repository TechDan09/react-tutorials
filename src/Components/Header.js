import React from 'react';
import {NavLink} from 'react-router-dom'

function Header(props) {
	console.log(props.daniel);
  return (
    <div>
    	<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    	  <div className="container">
    	    <NavLink className="navbar-brand" to="/">{props.daniel}</NavLink>
    	    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    	      <span className="navbar-toggler-icon"></span>
    	    </button>
    	    <div className="collapse navbar-collapse" id="navbarResponsive">
    	      <ul className="navbar-nav ml-auto">
    	        <li className="nav-item">
    	          <NavLink exact className="nav-link" to="/">Home</NavLink>
    	        </li>
    	        <li className="nav-item ">
    	          <NavLink className="nav-link" to="/About">About</NavLink>
    	        </li>
    	        <li className="nav-item">
    	          <NavLink className="nav-link" to="/Services">Services</NavLink>
    	        </li>
    	        <li className="nav-item">
    	          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
    	        </li>
    	      </ul>
    	    </div>
    	  </div>
    	</nav>
    </div>
  );
}

export default Header;