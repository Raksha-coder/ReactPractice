import React from 'react'
import { useState } from 'react';
const ControlledComp = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Controlled Component</h1>
      <form action="">
        <input type="text" value={name} placeholder='Enter Name' onChange={(event) => setName(event.target.value)} />
        <br />
        <input type="password" value={password} placeholder='Enter Password' onChange={(event) => setPassword(event.target.value)}/>
        <br />
        <input type="text" value={email} placeholder='Enter Email' onChange={(event) => setEmail(event.target.value)}/>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ControlledComp
