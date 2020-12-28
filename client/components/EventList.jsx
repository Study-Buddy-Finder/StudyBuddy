import React, {useState, useEffect, useContext} from 'react'
// render info of events

function EventList(props) {
    return (
        <div className = "event">
            Event: {props.name} 
            <div> Location : {props.location} </div>  
            <div> Time: Clippers down 50 by halftime </div>  
            <div> Capacity : Clippers are opening night champs </div>  
        </div>
    )
}

export default EventList


// event List should contain