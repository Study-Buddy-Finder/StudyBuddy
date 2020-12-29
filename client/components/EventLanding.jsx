import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import EventList from "./EventList.jsx";
import { AppContext } from "./ContextProvider";
import Classinfo from "./Classinfo";
import { Link, useRouteMatch, useParams } from "react-router-dom";
//use axios to get the list
//use hooks and use effect to set state

function EventLanding() {
  let match = useRouteMatch();
  const { currentClass_id, setCurrentEvent_id, currentEvent_id } = useContext(
    AppContext
  );

  const [eventInfo, setEventInfo] = useState([]);
  const [classinfo, setClassInfo] = useState([]);

  //useEffect to update state and fetch data
  //render event list
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/events/class/${currentClass_id}`)
      .then((res) => {
        setEventInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentClass_id]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/classes/${currentClass_id}`)
      .then((res) => {
        setClassInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentClass_id]);
  const eventList = [];
  for (let i = 0; i < eventInfo.length; i += 1) {
    eventList.push(
      <EventList
        setCurrentEvent_id={setCurrentEvent_id}
        className="eventList"
        key={eventInfo[i]["event_id"]}
        event_id={eventInfo[i]["event_id"]}
        name={eventInfo[i]["event_name"]}
        location={eventInfo[i]["event_location"]}
      ></EventList>
    );
  }
  const classInfo = [];
  for (let i = 0; i < classinfo.length; i += 1) {
    classInfo.push(
      <Classinfo
        className="classinfo"
        key={classinfo[i]["class_id"]}
        subject={classinfo[i]["subject"]}
        name={classinfo[i]["class_name"]}
      ></Classinfo>
    );
  }

  return (
    <div className="eventLandingContainer">
      <div className = "some_container">
        <div className="classContainer">
          <div className="classinfos">{classInfo}</div>
        </div>
        <div className="eventContainer">
          Event Landing
          <div className="events">{eventList}</div>
          <Link
            className=""
            to={`${match.path}/createevent`}
            key={Math.random() * 1000}
          >
            <button className="generic_button">Create New Event</button>
          </Link>
        </div>
      </div>

      <div className = 'img_container'>
        <img
          src="https://images.idgesg.net/images/article/2018/11/google-maps-chicago-100780535-large.jpg"
          width="400"
          height="200"
        ></img>
      </div>
    </div>
  );
}

export default EventLanding;
