import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import { AppContext } from "./ContextProvider";

function SchoolLanding() {
  const { currentSchool_id } = useContext(AppContext);

  return (
    <div>
      <div>
          <p>{currentSchool_id}</p>
        <p>School banner</p>
      </div>
      <div>
        <p>School description/newsfeed</p>
      </div>
    </div>
  );
}

export default SchoolLanding;
