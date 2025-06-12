import React from 'react'
//Get User
const LiftingUpChild2 = ({displayUsers}) => {
  return (
    <div>
      <h1>User List</h1>
       <div>
          {displayUsers.map((value,i)=>(
              <p key={i}>{value}</p>
          ))}
        </div>
    </div>
  )
}

export default LiftingUpChild2
