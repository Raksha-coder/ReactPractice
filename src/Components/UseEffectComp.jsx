import React, { useEffect } from 'react'
import { useState } from 'react';

const UseEffectComp = () => {
 const [counter,setCounter] = useState(0);
 const [data,setData] = useState(0);



 function calledOnce(){
    console.log("Hello");
 }


 useEffect(()=>{

 }) // call everytime.


 useEffect(()=>{
    calledOnce();
 },[])  
 // whenever the data or counter will change , the state will re-render 
//the component. so before my calledOnce were getting called multiple time.
//but after using useEffect , It is only running my calledOnce method once.



useEffect(()=>{

},[counter])
// call when counter state get changes



useEffect(()=>{

},[prop1,prop2]) // on prop change we can also call the useEffect



  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>counter :{counter}</button>
        <button onClick={() => setData(data + 1)}>data :{data}</button>
    </div>
  )
}

export default UseEffectComp;
