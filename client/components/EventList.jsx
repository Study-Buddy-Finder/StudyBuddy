import React, {useState, useEffect, useContext} from 'react'
// render info of events

function EventList(props) {
    return (
        <div>
           Event: {props.name} 
            <div className = "event">
                <div> Location : {props.location} </div>  
                <div> Time: Clippers were down 50 by halftime </div>  
                <div> Capacity : Clippers are openining champs </div>  
            </div>
         
        </div>
    )
}

export default EventList


// event List should contain