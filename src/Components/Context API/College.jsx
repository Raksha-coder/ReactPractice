import React, { useState } from 'react'
import ClassComp from './ClassComp';
import { SubjectContext } from './ContextData';
const College = () => {

  //college would be the provider .
  const [subject,setSubject] = useState("math");


  return (
    <div style={{backgroundColor:"blue",padding:"10px"}}>
        <SubjectContext.Provider value={subject}>
            <select  onChange={(event) => setSubject(event.target.value)}>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="english">English</option>
              <option value="geo">Geo</option>
              <option value="hindi">Hindi</option>
            </select>


            <h1>College Component</h1>
            <ClassComp />
        </SubjectContext.Provider>


    </div>
  )
}

export default College
