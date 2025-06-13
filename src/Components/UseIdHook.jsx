import React, { useId } from 'react'

const UseIdHook = () => {

  const id = useId();

  return (
    <div>
        <h1>Unique Id is {id}</h1>


      <label htmlFor={id}>Username : </label>
      <input type="text" id={id} placeholder='Enter Name' />

    </div>
  )
}

export default UseIdHook
