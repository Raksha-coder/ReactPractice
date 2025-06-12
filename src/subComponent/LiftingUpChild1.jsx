import React, { useState } from 'react'
//Add User
const LiftingUpChild1 = ({users,setUsers}) => {  //pass the state

  const [user,setUser] = useState("");


  function handleAddUser(){
     if (user.trim() !== "") {
      setUsers([...users, user]);
      setUser("");
    }
  }

  return (
    <div>
        <h1>Add User</h1>
        <input type="text" placeholder='Enter User Name' value={user} onChange={(event) => setUser(event.target.value)} />
        <button onClick={handleAddUser}>Add</button>
        <br />
        <hr />
    </div>
  )
}

export default LiftingUpChild1
