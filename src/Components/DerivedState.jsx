import React, { useEffect, useState } from 'react'

const DerivedState = () => {

  //if we are using the main state in other variable and performaing any calculation it is called derive state
  const [users,setUsers] = useState([]);
  const [user,setUser] = useState("");

 function handleUser(){
    setUsers([...users,user]);
    setUser("");
 }

 const totalUser = users.length;
 const lastUser = users[users.length-1];
 const totalUniqueUsers = new Set(users).size;

  return (
    <div>

      <div>Total Users :{totalUser}</div>
      <div>Last User: {lastUser}</div>
      <div>Unique users :{totalUniqueUsers}</div>

        <input type="text" onChange={() => setUser(event.target.value)} value={user} placeholder='Enter Name' />
        <button onClick={handleUser}>Add User</button>

        {
          users.map((value,i) =>(
            <p key={i}>{value}</p>
          ))
        }
    </div>
  )
}

export default DerivedState
