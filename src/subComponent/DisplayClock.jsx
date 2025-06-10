import React from 'react'
import { useState,useEffect } from 'react'
const DisplayClock = ({chooseColor}) => {
 const [time,setTime] = useState(0);

 useEffect(()=>{
    setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
    },1000);
 },[]) //run only once.


  return (
    <div style={{backgroundColor:"black"}}>
      <h2 style={{color:chooseColor}}>{time}</h2>
    </div>
  )
}

export default DisplayClock
