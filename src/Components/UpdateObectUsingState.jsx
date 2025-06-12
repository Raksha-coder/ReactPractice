import React, { useState } from 'react'

const UpdateObectUsingState = () => {

  const [userDetails,setUserDetails] = useState({
    name:"default",
    address :{
      city:"nagpur",
      country:"India"
    }
  });


  function handleName(val){
    userDetails.name = val;
    setUserDetails({...userDetails}); // learn the concept of shallow copy and deep copy
  }

  function handleCity(val){
      userDetails.address.city = val;
       setUserDetails({...userDetails,address:{...userDetails.address,val}});
  }

  return (
    <div>
      <input type="text" placeholder='update name' onChange={(event) => handleName(event.target.value)}/>

       <input type="text" placeholder='update city' onChange={(event) => handleCity(event.target.value)}/>

      <div>
        <ul>
          <li>{userDetails.name}</li>
          <li>{userDetails.address.city}</li>
          <li>{userDetails.address.country}</li>
        </ul>
      </div>
    </div>
  )
}

export default UpdateObectUsingState
