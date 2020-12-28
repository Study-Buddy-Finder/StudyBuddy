import React, {useState, useEffect, useContext} from 'react';
import { AppContext } from "./ContextProvider";


export default function EventProfile (props){

  //use this event id in your get request
  const { currentEvent_id } = useContext(AppContext);

  const [name,updateName] = useState('Vince');
  const [school, updateSchool] = useState('Codesmith');
  const [subject, updateClass] = useState(['FrontEnd ','Events Profiles ', 'hello']);

  return(
    <div className="event-container"> 
      <div className="item1">
        <img src="https://codesmith.io/a8e2213bcf9fa08e1c8c7ea83cc7885f.jpg" width="200" height="140"></img>
        {/* <p>Current: {name}</p>
        <p>Current School: {school}</p>
        <p>Current Class: {subject}</p> */}
        <p>Current Event_id: {currentEvent_id}</p>
        <p>Location: Pasadena, CA</p>
        <p>Time: 8 pm</p>
        <p>Capacity: 35</p>
        <p>Host: Codesmith</p>
      </div>
      <div className="item2"> 
        <div>
          Study session on frontend react hooks happening today!

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae elit eu eros pulvinar tristique ac eu eros. Quisque dictum diam leo, iaculis semper orci consectetur id. Maecenas ligula metus, mollis sit amet pellentesque in, laoreet sed risus. Fusce maximus ante et purus posuere, id lobortis diam placerat.
          Pellentesque eleifend lobortis sapien. Nunc eu mauris in nibh facilisis aliquet. Integer non pulvinar sapien. Quisque a purus sed enim aliquet fermentum. Etiam vel metus non quam bibendum ultricies ut ut justo. Sed tincidunt facilisis dui quis molestie.
          </p>
        </div>
      </div>
      <div className="item3">
        Friends attending: Ali, WIll, Heidi, Vince
        <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png" width="50" height="50"></img>
        <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png" width="50" height="50"></img>
        <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png" width="50" height="50"></img>
        <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png" width="50" height="50"></img>
      </div>
      <div className="item4"> 
        <div>
        <img src="https://images.idgesg.net/images/article/2018/11/google-maps-chicago-100780535-large.jpg" width="400" height="200"></img>
        </div>
       </div>
    </div>
  );
}