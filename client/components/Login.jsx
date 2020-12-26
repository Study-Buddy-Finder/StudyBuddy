import React, { Component, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const onSubmit = (values) => {
    console.log(values);
    // get req to check if email and PW exists for same user
    // if successful change status to logged in
    // axios.get('http://localhost:3000/api/test', values)
    // //check res status
    //   .then(res => if)

    // axios.get('http://localhost:3000/api/users/')
  };

  const { register, handleSubmit } = useForm();

  return (
    // <div>test signup</div>
    <div>
      <div className="signup">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label>Email Address</label>
            <input name="email" ref={register} />

            <label>Password</label>
            <input name="password" ref={register} />

            <input type="submit"></input>
          </fieldset>
        </form>
      </div>
      <div>
        Not registered? Click here
        <Link to="/signup">Sign up</Link>
        <Link to= "/homepage"> What it do </Link>
      </div>
    </div>
  );
};

export default Login;
