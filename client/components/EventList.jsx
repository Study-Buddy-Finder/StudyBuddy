import React, { useState, useEffect, useContext } from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";

// render info of events

function EventList(props) {
  let match = useRouteMatch();
  return (
    <Link className="sidebar_link" to={`${match.path}/event`} key={Math.random()*1000}>
      <div
        onClick={() => {
          props.setCurrentEvent_id(props.event_id);
        }}
        className="event"
      >
        Event: {props.name}
        <div> Location : {props.location} </div>
        <div> Time: Clippers down 50 by halftime </div>
        <div> Capacity : Clippers are opening night champs </div>
      </div>
    </Link>
  );
}

export default EventList;

// event List should contain
