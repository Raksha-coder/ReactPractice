import React, { useRef } from 'react'
import ForwardRefChild from "./../subComponent/ForwardRefChild"
const ForwardRef = () => {

    const userRef = useRef(null);

    function handleUserClick(){
        userRef.current.value = 1000;
    }

  return (
    <div>
      {/* <input type="text" ref={userRef} /> */}
      <ForwardRefChild ref={userRef} />
      <button onClick={handleUserClick}>call user</button>
    </div>
  )
}

export default ForwardRef
