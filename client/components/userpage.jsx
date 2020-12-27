import React, {useState} from 'react';


export default function Userpage (props){
  const [name,updateName] = useState('Vince');
  const [school, updateSchool] = useState('Codesmith');
  const [subject, updateClass] = useState(['FrontEnd ','React-hooks']);
  const [events, updateEvents] = useState(['Wednesday Standups']);
  return(
    <div> 
      <div>Welcome {name}</div>
      <div> Current School: {school} </div>
      <div> Current Class: {subject} </div>
      <div> Upcoming Events: {events}  </div>
      <div>
        <input type="text" className ="rough" value ={name} onChange={updateName}/>
        <button onClick={() => updateName(name = document.getElementsByClassName("rough").value)}>Change Name!</button>
      </div>
    </div>
  );
}


//userpage should render 
  //Hello "username"
  //display upcoming events