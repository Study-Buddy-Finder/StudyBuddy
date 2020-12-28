import React, { Component, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "./ContextProvider";
import axios from "axios";

function CreateSchool() {
  const { currentSchool_id } = useContext(AppContext);

  const onSubmit = (values) => {
    const data = {
      school_name: values.school_name,
      school_location: values.school_location,
    };

    axios
      .post("http://localhost:3000/api/schools", data)
      .then((res) => console.log(res));
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="schoolForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input name="school_name" placeholder="School Name" ref={register} />

        <label>Location</label>
        <input name="school_location" placeholder="School Location" ref={register} />

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default CreateSchool;
