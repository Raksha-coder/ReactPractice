// import React, { forwardRef } from 'react'

// const ForwardRefChild = (prop,ref) => {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   )
// }

// export default forwardRef(ForwardRefChild);

//above is the old way to use forwardRef.
//here the ref should be ref. do not change it's declaration.
//use forwardRef here from react.


//Below is the new way in react 19 

import React from 'react'

const ForwardRefChild = (prop) => {  //just we need to prop here simple.
  return (
    <div>
      <input type="text" ref={prop.ref} />
    </div>
  )
}

export default ForwardRefChild;

