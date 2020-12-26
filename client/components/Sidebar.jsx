import React, { Component,useState } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

function Sidebar() {
    return (
        <div className = 'sidebar_container'>
            <div>option1</div>
            <div>option2</div>
            <div>option3</div>
            <div>option4</div>
        </div>
    )
}

export default Sidebar
