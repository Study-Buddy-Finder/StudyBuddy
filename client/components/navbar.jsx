import React, {Component} from 'react';
import {Link} from'react-router-dom';

export default class Navbar extends Component {

  render(){
    return(
      <nav className="navbar">
        <ul className = "nav-barcontent">
          <li className ="navbar-item">
            <Link to="/user">Home</Link>
          </li>
          <li className ="navbar-item">
          <Link to="/update">Update Info</Link>
          </li>
          <li className ="navbar-item">
          <Link to="/find">Find Buddy/Events</Link>
          </li>
          <li className ="navbar-item">
          <Link to="/create">Create Event</Link>
          </li>
        </ul>
      </nav>
    )
  }
}