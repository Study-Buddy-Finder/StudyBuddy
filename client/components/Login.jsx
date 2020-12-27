import React, { Component, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

function Login () {

  const onSubmit = (values) => {
    console.log(values.email);
    // get req to check if email and PW exists for same user
    // if successful change status to logged in
    axios.get('http://localhost:3000/api/users', values)
      .then(res => console.log(res))
      // <Redirect to="/homepage" />
  };

  const { register, handleSubmit } = useForm();

  return (

    <div className="loginPage">
      <div className="loginBg">
        <img src="/studying.jpg" width="500" height="350"></img>
      </div>
      <div className="loginForm">
        <form onSubmit={handleSubmit(onSubmit)}>

          <label>Email Address</label>
          <input name="email" type="email" ref={register} />

          <label>Password</label>
          <input name="password" type="password" ref={register} />
          
          <div className="submitBtn">
            <input type="submit"></input>
            </div>

        </form>
  
      Not registered?
      <Link to="/signup">Create an Account</Link>

      <Link to= "/home"> What it do </Link>

      </div>
    </div>

  );
};

export default Login;
