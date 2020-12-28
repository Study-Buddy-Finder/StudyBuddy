import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AppContext } from "./ContextProvider";
import axios from "axios";

function Login(props) {
  const { user, setCurrentUser } = useContext(AppContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values)
    axios(
      `http://localhost:3000/api/users/auth/${values.user_name}/${values.user_password}`
    ).then((res) => {
      
      if (res.data.length > 0) {
        setCurrentUser(res.data[0]);
        props.history.push('/homepage')
      } else {
        alert("Wrong username or password entered");
      }
    });
  };

  return (
    <div className="loginPage">
      <div>{user.user_name}</div>
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
