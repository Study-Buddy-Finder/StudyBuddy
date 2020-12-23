import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Homepage from './components/homepage.jsx';
// import homepage
class App extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            // render hompage somewhere
          <Homepage></Homepage>
        
            );
    }
}




export default App;