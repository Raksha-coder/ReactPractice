import React from 'react'
import useToggle from '../Custom Hooks/useToggle';

const ToggleComp = () => {

  const [value,toggleValue] = useToggle(true);
    const [data,setData] = useToggle(true);

  return (
    <>
      <div>
        <button onClick={toggleValue}>Toggle Heading</button>
        <button onClick={() => toggleValue(false)} >Hide Heading</button>
        <button onClick={() => toggleValue(true)}>Show Heading</button>
    
        {
          value ?  <h1>Custom hook </h1> :null
        }
    </div>
    <hr />
        <div>
           <button onClick={setData}>Toggle Heading</button>
        <button onClick={() => setData(false)} >Hide Heading</button>
        <button onClick={() => setData(true)}>Show Heading</button>
    
        {
          data ?  <h1>Heading Two </h1> :null
        }
        </div>
    
    </>
  
  )
}

export default ToggleComp;
