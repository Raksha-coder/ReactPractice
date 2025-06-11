import React from 'react'
import { useFormStatus } from 'react-dom';

const UseFormStatus = () => {

  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res,2000));
    console.log("submit");
    
  }

  function CustomerFunction(){

    const {pending} = useFormStatus();  // automatically capture the changes

    console.log(pending);
    

    return(
      <div>
         <input type="text" placeholder='Enter name' />
            <br />
            <input type="password" placeholder='Enter Password' />
            <br />
            <button disabled={pending}>{pending ? "Submitting.." :"Submit"}</button>
            {/* {use the pending state of hook } */}
      </div>
    )
  }

  return (
    <div>
        <h1>useFormStatus Hook in react 19</h1>
        <form action={handleSubmit}>
            <CustomerFunction />
        </form>
    </div>
  )
}

export default UseFormStatus
