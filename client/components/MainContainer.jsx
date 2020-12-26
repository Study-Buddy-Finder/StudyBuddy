import React, { Component,useState } from "react";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";

//import routes
import Navbar from "./navbar.jsx";
import Userpage from "./userpage.jsx";
// import Findpage from "./findstudy.jsx";
import UpdateUser from "./updateuser.jsx";
import CreateEvent from "./createevent.jsx";

export default class Homepage extends Component {



  render() {
    return(
      <div>
        <Userpage/>
      {/* <Router>
        <Switch>

        <Route exact path="/user">
          <Userpage/>
          <div>hellllooooooo!!!!</div>
        </Route>

        <Route exact path= "/create">
          <CreateEvent/>
        </Route>

        </Switch>
 */}


{/* 
        <Route path ="/user" exact component = {Userpage}/>
        <Route path ="/find"  component = {Findpage}/>
        <Route path ="/update"  component = {UpdateUser}/>
        <Route path ="/create"  component = {CreateEvent}/>
 */}




      {/* </Router> */}
      </div>
    );
  }
}

//render the nav bar and router 
  //routes 
    //1) userpage
    //2) find study buddy/events
    //3) update user info
    //4) create study event
    
