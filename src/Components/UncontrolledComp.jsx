import React, { useRef } from 'react'

const UncontrolledComp = () => {

    const userRef = useRef("");
    const passwordRef = useRef("");

  function handleSubmit(event){
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;

    console.log("Submitted",user,password);
    
  }

    function handleSubmitRef(event){
     event.preventDefault();
     const user = userRef.current.value;
     const pass = passwordRef.current.value;

    console.log("Submitted",user,pass);
    
  }

  return (
    <>
     <div>
      <h1>Uncontrolled Component</h1>
      <form action="" method="post" onSubmit={handleSubmit}>
        <input type="text" placeholder='enter name' id='user' />
        <br />
        <input type="password" placeholder='enter password' id='password'/>
        <br />
        <button>Submit</button>
      </form>
    </div>

<br />
<br />
    <div>
        <h1>Uncontrolled Component with useRef</h1>
        <form action="" method="post" onSubmit={handleSubmitRef}>
            <input ref={userRef} type="text" placeholder='enter name' />
            <br />
            <input ref={passwordRef} type="password" placeholder='enter password' />
            <br />
            <button>Submit</button>
        </form>
        </div>


    </>
   
  )
}

export default UncontrolledComp;


/*
event.preventDefault() : Stops default browser behavior (like form submission, link navigation)
*/
