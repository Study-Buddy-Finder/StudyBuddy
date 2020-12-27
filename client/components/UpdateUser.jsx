import React, {useState} from 'react';


export default function UpdateUser (props){
  const [name,updateName] = useState('Vince');
  const [school, updateSchool] = useState('Codesmith');
  const [subject, updateClass] = useState(['FrontEnd ','React-hooks']);

  return(
    <div> 
      <div>Current: {name}</div>
      <div>
      <input type="text" onChange={updateName}/>
      <button onClick={()=> updateName('rough day')}>Change Name!</button>
      </div>
      <div> 
        Current School: {school}
        <div>
          <input type="text" onChange={updateSchool}/>
          <button onClick={()=> updateName('rough day')}>Change School!</button>
        </div>
      </div>
      <div> 
        Current Class: {subject}
        <div>
          <input type="text" onChange={updateClass}/>
          <button onClick={()=> updateName('rough day')}>Change Class!</button>
        </div>
       </div>
    </div>
  );
}