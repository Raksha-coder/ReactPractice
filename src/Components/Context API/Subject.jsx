import React, { useContext } from 'react'
import { SubjectContext } from './ContextData';
const Subject = () => {
  const subject = useContext(SubjectContext);


  return (
    <div style={{backgroundColor:"black",color:"white",padding:"10px"}}>
      <h1>Subject Component</h1>
      <p>Subject is : {subject}</p>
    </div>
  )
}

export default Subject
