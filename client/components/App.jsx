import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import styles from "../styles.css";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     loggedIn: false,
    //     displaySignup: false,
    // }
    // this.displaySignup = this.displaySignup.bind(this);
  }

  // displaySignup(e) {
  //     e.preventDefault()
  //     console.log('hi')
  //     this.setState({
  //         displaySignup: true
  //     })
  // }
  // componentDidMount() {
  //     return (

  //     )
  // }
  
  render() {
    return (
      <div className = 'app'>

        <Switch>

          <Route path="/homepage">
            <Navbar />
            <div className = "container">
                <Sidebar />
                <MainContainer />
            </div>
          </Route>

        </Switch>

      </div>
    );
  }
}

export default App;
