import React, { Component } from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";

export default function Navbar() {
  let match = useRouteMatch();
  return (
    <nav className="navbar_container">
      <button className="navbar_item">
        <Link className="navbar_link" to={`${match.path}/`}>Home</Link>
      </button>
      <input placeholder="Search.."></input>
      <button className="navbar_item">
        <Link className="navbar_link" to={`${match.path}/userpage`}>Profile</Link>
      </button>
      <button className="navbar_item">
        <Link className="navbar_link" to={`${match.path}/event`}>Event</Link>
      </button>
      <button className="navbar_item">
        <Link className="navbar_link" to={`/`}>Logout</Link>
      </button>
    </nav>
  );
}
