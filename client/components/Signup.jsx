import React, { Component, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

function Signup(props) {

  const onSubmit = (values) => {

    const data = {
      first_name: values.first_name,
      last_name: values.last_name,
      user_name: values.user_name,
      user_password: values.user_password,
      user_email: values.user_email,
      user_location: values.user_location
    }
    console.log(data)

    axios.post('http://localhost:3000/api/users', data)
    .then(res => {
      console.log(res)
      if (res.status === 200) {
        alert("Account successfully created. Return to Login")
        props.history.push('/')
      } else {
        alert("Error creating account");
      }
    })
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="signupPage">
      
      <div className="signupForm">

        <form onSubmit={handleSubmit(onSubmit)}>

          <label>Name</label>
          <input name="first_name" placeholder="First" ref={register} />
          <input name="last_name" placeholder="Last" ref={register} />

          <label>Username</label>
          <input name="user_name"  ref={register} />

          <label>Password</label>
          <input name="user_password" type="password" ref={register} />

          <label>Email</label>
          <input name="user_email" type="email" ref={register} />

          <label>Location</label>
          <input name="user_location" ref={register} />


          {/* <label>Profile Picture</label>
          <input name="profilepic" type="file" ref={register} /> */}

          <input type='submit'></input>

        </form>
      </div>
    </div>
  )
}

export default Signup;