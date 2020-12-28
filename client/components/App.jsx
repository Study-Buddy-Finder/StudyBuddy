import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import styles from "../styles.css";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";




function App (){
  
  
    return (
      <div className = 'app'>
        {/* <AppContext.Provider value={this.state}> */}
        <div className="header">
          <h1>Study Buddy Finder</h1>
        </div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route path="/homepage">
            <Navbar />
            <div className = "container">
                <Sidebar />
                <MainContainer />
            </div>
          </Route>

        </Switch>
        {/* //  </AppContext.Provider> */}
      </div>
    );

}

export default App;