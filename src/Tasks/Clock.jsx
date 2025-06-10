import React from 'react'
import { useState } from 'react';
import DisplayClock from '../subComponent/DisplayClock';
const Clock = () => {
 const [color,setColor] = useState('yellow');

  function handleColor(e){
    setColor(e.target.value);
  }

  return (
    <div>
        <h1>Default prop in React Js</h1>

        <select defaultValue={"yellow"} onChange={(e) => handleColor(event)}>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
        </select>

        <DisplayClock chooseColor={color}/>
    </div>
  )
}

export default Clock
