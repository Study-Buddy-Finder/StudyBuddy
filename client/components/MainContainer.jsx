import React, { Component, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import UserProfile from "./UserProfile.jsx";
import UpdateUser from "./UpdateUser.jsx";
import CreateEvent from "./CreateEvent.jsx";
import EventLanding from "./EventLanding.jsx";
import EventProfile from "./EventProfile.jsx";
import SchoolLanding from "./SchoolLanding.jsx";

export default function Homepage() {
  let match = useRouteMatch();
  return (
    <div className="main_container">
      <Switch>
        <Route path={`${match.path}/userpage`}>
          <UserProfile />
        </Route>
        <Route path={`${match.path}/event`}>
          <EventProfile />
        </Route>
        <Route path={`${match.path}/createevent`}>
          <CreateEvent />
        </Route>
        <Route path={`${match.path}/schoollanding`}>
          <SchoolLanding />
        </Route>
        <Route path={`${match.path}/eventlanding`}>
          <EventLanding />
        </Route>
        <Route path={`${match.path}/createevent`}>
          <CreateEvent />
        </Route>
        {/* <Route path={match.path}>
          <UserProfile />
        </Route> */}
      </Switch>
    </div>
  );
}
