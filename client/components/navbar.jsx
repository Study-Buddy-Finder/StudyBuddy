import React, {Component} from 'react';
import {Link} from'react-router-dom';

class Navbar extends Component {

  render(){
    return(
      <nav className="navbar_container">
        <ul className = "navbar_content">
        <img src="/owl.png" height="50px" width="50px"></img>
          <li className="navbar_item">
            <Link to="/home">Home</Link>
          </li>
          <li className="navbar_item">
          <Link to="/user">Update Info</Link>
          </li>
          <li className="navbar_item">
          <Link to="/find">Find Buddy/Events</Link>
          </li>
          <li className="navbar_item">
          <Link to="/create">Create Event</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;