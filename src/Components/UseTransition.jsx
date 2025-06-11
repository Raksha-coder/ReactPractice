import React, { useTransition } from 'react'

const UseTransition = () => {

  const [pending,startTransition] = useTransition();
  console.log(pending);
  

  function handleButton(){

    startTransition(async () => {
      await new Promise(res => setTimeout(res,2000))
    })
  }

  return (
    <div>
      <h1>useTransition hook in react 19</h1>
      <button disabled={pending} onClick={handleButton}>Click</button>
      <div>
      {
        pending ? <img style={{width:"200px"}} src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" /> : null
      }
      </div>
      
    </div>
  )
}

export default UseTransition
