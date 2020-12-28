import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "./ContextProvider";

// render info of events

function Classinfo(props) {
  const { currentClass_id, user } = useContext(AppContext);

  const subscribeToClass = (user_id, class_id) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/api/classsub",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: { user_id: user_id, class_id: class_id },
    }).then((res) => console.log(res));
  };

  return (
    <div>
      Class info: {props.name}
      <div className="event">
        <div> Subject : {props.subject} </div>
      </div>
      <div>Description: xD</div>
      <button onClick={() => {subscribeToClass(user.user_id, currentClass_id)}}>Subcribe to Class</button>
    </div>
  );
}

export default Classinfo;
