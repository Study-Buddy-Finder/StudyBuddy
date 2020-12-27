import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Sidebar() {
  const [schools, setSchools] = useState([]);

  // useEffect(async () => {
  //   try {
  //     const res = await fetch("http://localhost:3000/api/schools", {
  //       method: "GET",
  //       headers: { "Content-Type": "Application/JSON" },
  //     });

  //     const data = await res.json();
  //     console.log(data);
  //     setSchools(data.results);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });

  useEffect(()=>{
    fetch("http://localhost:3000/api/schools", {
        method: "GET",
        headers: { "Content-Type": "Application/JSON" },
      })
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setSchools(data.results)
      })
      .catch((err) => console.log(err));

  })

  return (
    <div className="sidebar_container">
      <div className="sidebar_schools_container">
        <div className="display_text">School</div>
        <p>Codesmith</p>
          
        <p>Umass</p>
        <p>Uconn</p>
      </div>
      <div className="sidebar_schools_container">
        <div className="display_text">Classes</div>
        <p>MATH101</p>

        <p>SCI202</p>
        <p>MATH404</p>
      </div>
    </div>
  );
}

export default Sidebar;
