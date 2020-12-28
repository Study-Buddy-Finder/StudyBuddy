import React, {useState, useEffect, useContext} from 'react'
// render info of events

function Classinfo(props) {
    return (
        <div>
           Class info: {props.name} 
            <div className = "classinfo">
                <div className ="classItem"> Subject : {props.subject} </div>  
            </div>
            <div className ="classItem">
              Description: xD
            </div>
         
        </div>
    )
}

export default Classinfo