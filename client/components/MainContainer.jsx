import React, { Component,useState } from "react";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";

//import routes
import Navbar from "./Navbar";
import UserPage from "./UserPage";
import Sidebar from "./Sidebar"

class MainContainer extends Component {



  render() {
    return(
      <div className="main">
        <Navbar />
        <Sidebar />
        <UserPage/>
      </div>
    );
  }
}

export default MainContainer;