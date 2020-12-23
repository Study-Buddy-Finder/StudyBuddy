import React, { Component } from "react";
import Signup from './Signup'
import Login from './Login'
import { Switch, Route } from 'react-router-dom';
import styles from '../styles.css';
import Homepage from './homepage';

class App extends Component {
    constructor(props){
        super(props)
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
            <div>
                <div className='header'><h1>Welcome to Study Buddy 4000</h1></div>
               <Switch>
                   <Route exact path= '/' component={Login} />
                   <Route exact path='/signup' component={Signup} />
                   <Route exact path='/homepage' component = {Homepage}/>
               </Switch>

            </div>
     
            );
    }
}




export default App;