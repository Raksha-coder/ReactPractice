import React from 'react'

const PassFunctionChild = ({handleClick}) => {

  const name = "Raksha";


  return (
    <div>
      <button onClick={() => handleClick(name)}>Click it </button>
    </div>
  )
}

export default PassFunctionChild
