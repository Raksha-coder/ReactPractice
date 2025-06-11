/*Pass function from one component to another in react */
import React from 'react'
import PassFunctionChild from "./../subComponent/PassFunctionChild";

const PassFunction = () => {


  function handleFunc(name){
    alert(`Clicked button: ${name}`);
  }


  return (
    <div>
      <PassFunctionChild handleClick={handleFunc}/>
    </div>
  )
}

export default PassFunction
