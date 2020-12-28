import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import styles from "../styles.css";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { AppContext } from "./ContextProvider";

class App extends Component {
  constructor(props) {
    super(props);


    this.setCurrentSchool_id = (school_id) => {
      this.setState(state => ({
        currentSchool_id: school_id,
      }));
    };
    this.setCurrentClass_id = (class_id) => {
      this.setState(state => ({
        currentClass_id: class_id,
      }));
    };
    this.setCurrentEvent_id = (event_id) => {
      this.setState(state => ({
        currentEvent_id: event_id,
      }));
    };

    this.state = {
      user: {},
      currentSchool_id: "1",
      currentClass_id: "1",
      currentEvent_id: "1",
      setCurrentSchool_id: this.setCurrentSchool_id,
      setCurrentClass_id: this.setCurrentClass_id,
      setCurrentEvent_id: this.setCurrentEvent_id,
      
    };
  }

  render() {
    return (
      <div className="app">
        <AppContext.Provider value={this.state}>
          <div className="header">
            <h1>Study Buddy Finder</h1>
          </div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />

            <Route path="/homepage">
              <Navbar />
              <div className="container">
                <Sidebar />
                <MainContainer />
              </div>
            </Route>
          </Switch>
          
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
