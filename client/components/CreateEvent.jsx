import React, { Component, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "./ContextProvider";
import axios from "axios";

function CreateEvent() {
  const { currentClass_id } = useContext(AppContext);

  const onSubmit = (values) => {
    const data = {
      event_name: values.event_name,
      event_location: values.event_location,
      class_id: currentClass_id,
    };

    axios
      .post("http://localhost:3000/api/events", data)
      .then((res) => console.log(res));
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="classForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input name="event_name" placeholder="Event Name" ref={register} />

        <label>Event Location</label>
        <input name="event_location" placeholder="Event Location" ref={register} />

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default CreateEvent;
