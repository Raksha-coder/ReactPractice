import React, { useRef } from 'react'

const UseRef = () => {
    const inputRef = useRef("");

    function handleInputField(){
        //get the reference of a tag
        console.log("input value",inputRef.current);

        inputRef.current.style.border = "2px solid red";
    }

  return (
    <div>
        <h2>useRef</h2>
        <input type="text" ref={inputRef} placeholder='Enter your name'/>
        <button onClick={handleInputField}>Click</button>
    </div>
  )
}

export default UseRef
