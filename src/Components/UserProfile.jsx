import React from 'react'
// import "./../css/style.css";
import style from  "./../css/UserProfile.module.css"
const UserProfile = () => {
  return (
    <div>
      <h1 className={style.heading}>User Profile</h1>
    </div>
  )
}

export default UserProfile


/*Note :
CSS Modules only expose class names or IDs that are explicitly defined.

This will not work , do not use tag
div {
  background-color: yellow;
}

*/
