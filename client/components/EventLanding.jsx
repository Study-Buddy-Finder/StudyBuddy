import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import EventList from "./EventList.jsx";
import { AppContext } from "./ContextProvider";
import Classinfo from "./Classinfo";
//use axios to get the list
//use hooks and use effect to set state 

function EventLanding() {

    //make a get request with this id for correct event list
    const { currentClass_id } = useContext(AppContext);



    const [eventInfo, setEventInfo] = useState([]);
    const [classinfo, setClassInfo] = useState([]);
    
    //useEffect to update state and fetch data 
    //render event list 
    useEffect(()=> {
        axios.get(`http://localhost:3000/api/events/class/${currentClass_id}`)
            .then(res => {
                setEventInfo(res.data);
                console.log(eventInfo);
            })
            .catch (err => {
                console.log(err);
            })
    },[currentClass_id]);

     useEffect(()=> {
        axios.get(`http://localhost:3000/api/classes/${currentClass_id}`)
            .then(res => {
                setClassInfo(res.data);
                // console.log(res.data);
                console.log(classinfo);
            })
            .catch (err => {
                console.log(err);
            })
    },[currentClass_id]);
    const eventList = [];
    for (let i = 0; i < eventInfo.length; i+= 1) {
        eventList.push(<EventList className ="eventList" key= {eventInfo[i]["event_id"]} name={eventInfo[i]["event_name"]} location={eventInfo[i]["event_location"]} ></EventList>)
    }
    const classInfo = [];
    for (let i = 0; i < classinfo.length; i+= 1) {
        classInfo.push(<Classinfo className ="classinfo" key= {classinfo[i]["class_id"]} subject={classinfo[i]["subject"]} name = {classinfo[i]["class_name"]} ></Classinfo>)
    }
    // <Classinfo className ="classinfo" key= {classinfo["class_id"]} subject={classinfo["subject"]} name = {classinfo["class_name"]} ></Classinfo>
    return (
        <div className = "eventLandingContainer">
            <div className ="classContainer">
                Current Class id : {currentClass_id}
                <div>
                    {classInfo}
                </div>

            </div>
            <div className ="eventContainer">
                Event Landing
                <div className="events">
                    {eventList}
                </div>
            </div>
            
        </div>
    )
}

export default EventLanding
