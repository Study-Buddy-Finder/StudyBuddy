import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import MainContainer from "./MainContainer";
import CreateEvent from "./CreateEvent";
import UserPage from "./UserPage";
import UpdateUser from "./UpdateUser"
import styles from "../styles.css";

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

          <Route exact path="/">     
          <div className="header">
            <h1>Study Buddy 4000</h1>
          </div>
          <Login /> 
          </Route>
          <Route exact path="/signup">
          <div className="header">
            <h1>Study Buddy 4000</h1>
          </div>
          <Signup /> 
          </Route>
          <Route path="/home" component={MainContainer} />
          <Route path="/user">
            <MainContainer />
            <UpdateUser />
          </Route>
          <Route exact path="/create">
            <MainContainer />
            <CreateEvent />
          </Route>

        </Switch>

      </div>
    );
  }
}

export default App;
