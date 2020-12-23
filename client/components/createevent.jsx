import React, {useState} from 'react';

export default function CreateEvent(props){
  const [school, updateSchool] = useState('Codesmith');
  const [subject, updateClass] = useState(['FrontEnd ','React-hooks']);
  const [location, updateLocation] = useState('');
  const [date, updateDate] = useState('no date set yet')

  return(
    <div> 
        Current: {location}
        What Subject?
        <div>
          <input type="text" onChange={updateClass}/>
        </div>
        Choose Location
        <div>
          <input type="text" className = "location " onChange={updateLocation}/>
        </div>
        What Day?
        <div>
          <input type="text" onChange={updateSchool}/>
        </div>
        <button onClick={()=> {updateClass('Redux'); updateLocation(document.getElementsByClassName("location").value); updateDate('April 20,2021')}}>Create Event!</button>
   </div>
  )
}