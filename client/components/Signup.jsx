import React, { Component, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

function Signup() {

  const onSubmit = (values) => {
    console.log(values)
    axios({
      method: 'POST',
      url: 'http://localhost:3000/api/users',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: { values }
    })
    .then(res => console.log(res))
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