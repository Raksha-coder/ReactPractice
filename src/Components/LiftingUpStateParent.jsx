import React , {useState} from 'react'
import LiftingUpChild1 from "./../subComponent/LiftingUpChild1";
import LiftingUpChild2 from "./../subComponent/LiftingUpChild2";
const LiftingUpStateParent = () => {
  const [users,setUsers] = useState([]);


  return (
    <div>
      <LiftingUpChild1 users={users}  setUsers = {setUsers}/>
      <LiftingUpChild2 displayUsers = {users}/>
    </div>
  )
}

export default LiftingUpStateParent
