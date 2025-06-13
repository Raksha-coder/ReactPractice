import React, { useActionState } from 'react'

const UseActionState = () => {


  async function handleSubmit(previousData,formData){
   //on submit action get trigger and it called this function.
    console.log("submit");
    let name = formData.get("name");
    let pass = formData.get("password");

   
    await new Promise((res)=> setTimeout(res,2000));

    if(name && pass){
      return {message:"data submitted",name,pass}
    }else{
      return{error:"error while submitting data",name,pass}
    }
    
  }
  const [data,action,pending] = useActionState(handleSubmit,undefined); 
  //provide 3 things
  //It get automatically update 
  
  return (
    <div>
        <h1>useActionState in react</h1>
        <form action={action}>
          <input type="text" placeholder='enter name' name='name'/>
          <br />
          <input type="password" placeholder='enter pass' name='password'/>
          <br />
          <button disabled={pending}>{pending ? "submitting" : "submit"}</button>
        </form>
        <div style={{color:"green"}}>
          {
            data?.message && <span>{data?.message}</span>
          }
        </div>

        <div style={{color:"red"}}>
          {
            data?.error && <span>{data?.error}</span>
          }
        </div>

        <h3>Name : {data?.name}</h3>
        <h3>Password : {data?.pass}</h3>
    </div>
  )
}

export default UseActionState
