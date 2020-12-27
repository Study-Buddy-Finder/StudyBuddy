import React, { Component, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";


function Login() {
  const onSubmit = (values) => {
    // get req to check if email and PW exists for same user
    // if successful change status to logged in
    // axios.get('http://localhost:3000/api/users/auth', values,
    // {headers: { "Content-Type": "Application/JSON" }})
    //   .then(res => console.log(res))
    // <Redirect to="/homepage" />
    console.log(values)
    fetch(
      `http://localhost:3000/api/users/auth/${values.user_name}/${values.user_password}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "Application/JSON",
        }
      }
    )
      .then((res) => res.json())
      .then((userData) => console.log(userData));
  };

  //headers: { "Content-Type": "Application/JSON" }

  const { register, handleSubmit } = useForm();

  return (

    <div className="loginPage">
      <img
        className="loginBg"
        src="/studying.jpg"
        width="500"
        height="350"
      ></img>

      <div className="loginForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input name="user_name" ref={register} />

          <label>Password</label>
          <input name="user_password" type="password" ref={register} />

          <div className="submitBtn">
            <input type="submit"></input>
          </div>
        </form>
        Not registered?
        <Link to="/signup">Create an Account</Link>
        <Link to="/homepage"> What it do </Link>
      </div>
    </div>
  );
}

export default Login;
