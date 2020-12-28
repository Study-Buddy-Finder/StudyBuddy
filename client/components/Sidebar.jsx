import axios from "axios";
import React, { useState, useEffect } from "react";
// import { AppContext } from "./ContextProvider";

function Sidebar() {
  const [schools, setSchools] = useState([]);
  const [school, setSchool] = useState("");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/api/schools").then((res) =>
      setSchools(res.data)
    );
  }, []);

  function selectSchool(school_id) {
    const query = school_id;
    axios("http://localhost:3000/api/classes/school/" + query).then((res) =>
      setClasses(res.data)
    );
    setSchool(school_id);
  }

  return (
    // <AppContext.Consumer>
      <div className="sidebar_container">
        <div className="sidebar_subcontainer">
          <div className="sidebar_title">School</div>
          {schools.map((school) => {
            return (
              <div
                onClick={() => {
                  return selectSchool(school.school_id);
                }}
                className="sidebar_item"
              >
                {school.school_name}
              </div>
            );
          })}

          <button className="sidebar_button">Add new School</button>
        </div>
        <div className="sidebar_subcontainer">
          <div className="sidebar_title">Classes</div>

          {classes.map((data) => {
            return <div className="sidebar_item">{data.class_name}</div>;
          })}

          {/* {({ selectedSchool_id }) => <p>{selectedSchool_id}</p>} */}

          <button className="sidebar_button">Add new Class</button>
        </div>
      </div>
    // </AppContext.Consumer>
  );
}

export default Sidebar;