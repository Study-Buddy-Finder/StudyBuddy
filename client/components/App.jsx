import React, { Component } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Switch, Route } from "react-router-dom";
import styles from "../styles.css";
import Navbar from "./navbar";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import CreateEvent from "./createevent.jsx";
import Userpage from "./userpage.jsx";

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
        <div className="header">
          <h1>Welcome to Study Buddy 4000</h1>
        </div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route path="/homepage/">
            <Navbar />
            <div className = "container">
                <Sidebar />
                <MainContainer />
            </div>
          </Route>

          <Route path="/user/">
            <Navbar />
            <div className = "container">
                <Sidebar />
                <Userpage />
                <p>we in user</p>
            </div>
          </Route>

          <Route path="/create/">
            <Navbar />
            <div className = "container">
                <Sidebar />
                <CreateEvent />
                <p>we in create</p>
            </div>
          </Route>




        </Switch>
      </div>
    );
  }
}

export default App;
