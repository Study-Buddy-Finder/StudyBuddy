import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";


function Login(props) {
  const onSubmit = (values) => {

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
      .then((userData) => {
        if (userData.length > 0) {
          props.history.push('/homepage')
        } else {
          alert('Wrong username or password entered')
        }
      });
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