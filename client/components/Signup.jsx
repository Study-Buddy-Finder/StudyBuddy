import React, { Component, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

function Signup() {

  const onSubmit = (values) => {
    console.log(values)
    axios.post('http://localhost:3000/api/test', values)
      .then(res => console.log(res))
      // if successful:
      // changed loggedin state
      // redirect back to login
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="signupPage">
      
      <div className="signupForm">

        <form onSubmit={handleSubmit(onSubmit)}>

          <label>Name</label>
          <input name="fname" placeholder="First" ref={register} />
          <input name="lname" placeholder="Last" ref={register} />

          <label>Email</label>
          <input name="email" type="email" ref={register} />

          <label>Password</label>
          <input name="password" type="password" ref={register} />

          <label>School</label>
          <select name="school" ref={register}>
            <option selected value="">none</option>
            <option value="testschool">Test School</option>
          </select>

          <label>Class</label>
          <select name="class" ref={register}>
            <option selected value=""></option>
            <option value="testclass">Test Class</option>
          </select>

          <label>Profile Picture</label>
          <input name="profilepic" type="file" ref={register} />

          <input type='submit'></input>

        </form>
      </div>
    </div>
  )
}

export default Signup;