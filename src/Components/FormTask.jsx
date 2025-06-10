import React, { useState } from 'react';

function FormTask() {
  const [name,setName] = useState("aa");
  const [color,setColor] = useState("");
  const [date,setDate] = useState("");
  
  function handleChange(e){
    setName(e.target.value);
  }

  function handleColor(e){
    setColor(e.target.value);
  }

  function handleDate(e){
    setDate(e.target.value);
  }



  return (
    <>
      <h1>Get Input Field</h1>
      <input type="text"  placeholder='Enter name' onChange={() => handleChange(event)}  value={name}/><br />
       <input type="color"  placeholder='choose color' onChange={() => handleColor(event)}  value={color}/><br />
        <input type="date"  placeholder='select date' onChange={() => handleDate(event)}  value={date}/><br />

        <div>
          <h1>Values that you have selected</h1>
          <p>Nme :{name}</p>
          <p>Color : {color}</p>
          <p>Date : {date}</p>
        </div>

    </>
  )
}

export default FormTask
