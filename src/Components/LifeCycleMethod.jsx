import React, { useEffect } from 'react'

const LifeCycleMethod = () => {
    useEffect(()=>{
        // this code will run on mount
    },[]);

     useEffect(()=>{
        //This code  will run on update
    },[state,prop]);

     useEffect(()=>{
        // this code will run on unmount

        return () =>{

        }
    },[]);


     useEffect(()=>{
        //This code will run on every lifecycle event.
    });




  return (
    <div>
      
    </div>
  )
}

export default LifeCycleMethod
