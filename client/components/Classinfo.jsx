import React, {useState, useEffect, useContext} from 'react'
// render info of events

function Classinfo(props) {
    return (
        <div>
           Class info: {props.name} 
            <div className = "event">
                <div> Subject : {props.subject} </div>  
            </div>
            <div>
              Description: xD
            </div>
         
        </div>
    )
}

export default Classinfo