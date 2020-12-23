import React, { Component, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Signup = () => {

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
    // <div>test signup</div>
    <div className="signup">

    <form onSubmit={handleSubmit(onSubmit)}>
    <fieldset>
      <label>First Name</label>
      <input name="fname" ref={register} />

      <label>Last Name</label>
      <input name="lname" ref={register} />

     <label>Email Address</label>
      <input name="email" ref={register} />

      <label>Password</label>
      <input name="password" ref={register} />

      <label>School</label>
      <select name="school" ref={register}>
        <option selected value="none">none</option>
        <option value="testschool">Test School</option>
      </select>

        <label>Class</label>
      <select name="class" ref={register}>
        <option selected value="none"></option>
        <option value="testclass">Test Class</option>
        </select>

      <label>Profile Picture</label>
      <input name="profilepic" type="file" ref={register} />

      <input type='submit'></input>
      </fieldset>
   </form>
   </div>

  )

}


export default Signup;