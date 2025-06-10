import React from 'react'
import User from "./../subComponent/User"
const ReuseCompInLoop = () => {

   const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 28,
    isActive: true
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    age: 34,
    isActive: false
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie@example.com",
    age: 22,
    isActive: true
  },
  {
    id: 4,
    name: "Diana Evans",
    email: "diana@example.com",
    age: 45,
    isActive: false
  },
  {
    id: 5,
    name: "Ethan Brown",
    email: "ethan@example.com",
    age: 31,
    isActive: true
  }
];


  return (
    <div>
        <h1>Reuse Component in Loop</h1>
        {
          users.map((userData,i)=>(
            <div key={i}>
              <User users={userData}/>
            </div>
          ))
        }
    </div>
  )
}

export default ReuseCompInLoop
