import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./ContextProvider";
import axios from "axios";

export default function EventProfile(props) {
  //use this event id in your get request
  const { currentEvent_id, user } = useContext(AppContext);
  const [eventInfo, setEventInfo] = useState([""]);
  const [classInfo, setClassInfo] = useState([""]);
  const [usersInfo, setUsersInfo] = useState([""]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/events/" + currentEvent_id)
      .then((res) => {
        setEventInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [eventInfo.join(",")]);

  useEffect(() => {
    let classname = eventInfo[0]["class_id"];

    if (!classname) {
      classname = "";
    }

    axios
      .get("http://localhost:3000/api/classes/" + classname)
      .then((res) => {
        setClassInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [classInfo.join(",")]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/eventsub/event/" + currentEvent_id)
      .then((res) => {
        setUsersInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [usersInfo.join(",")]);

  const subscribeToEvent = (user_id, event_id) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/api/eventsub",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: { user_id: user_id, event_id: event_id },
    }).then((res) => console.log(res));
  }

  return (
    <div className="event-container">
      <div className="item1">
        <img
          src="https://codesmith.io/a8e2213bcf9fa08e1c8c7ea83cc7885f.jpg"
          width="200"
          height="140"
        ></img>
        <p>Current Event_id: {currentEvent_id}</p>
        <p>Event: {eventInfo[0]["event_name"]}</p>
        <p>Location: {eventInfo[0]["event_location"]}</p>
        <p>Class: {classInfo[0]["class_name"]}</p>
        {/* <p>Subject: {classInfo[0]["subject"]}</p> */}
        <p>Time: 8 pm</p>
        <p>Capacity: 35</p>
        <p>Host: Codesmith</p>
        <button onClick = {()=>{subscribeToEvent(user.user_id, currentEvent_id)}}>Subscribe to event</button>
      </div>
      <div className="item2">
        <div>
          Study session on frontend react hooks happening today!
          <p>
            During this free workshop we'll explore the most popular
            Object-oriented programming patterns in JavaScript and learn how the
            'this' and 'new' keywords are working under-the-hood with the
            prototype chain. All experience levels welcome!
          </p>
        </div>
      </div>
      <div className="item3">
        <span>Friends attending: </span>
        {usersInfo.map((user) => {
          return (
            <span key={Math.random() * 100}>
              {user["first_name"]} {user["last_name"]}{" "}
            </span>
          );
        })}
        {/* <img
          src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
          width="50"
          height="50"
        ></img> */}
      </div>
      <div className="item4">
        <div>
          <img
            src="https://images.idgesg.net/images/article/2018/11/google-maps-chicago-100780535-large.jpg"
            width="400"
            height="200"
          ></img>
        </div>
      </div>
    </div>
  );
}
