import React from 'react'
import CollegeData from '../subComponent/CollegeData';
const NestedLooping = () => {

const collegeDate = [
  {
    name: "Springfield University",
    city: "Springfield",
    website: "https://www.springfield.edu",
    student: [
      {
        name: "Alice Smith",
        age: 22
      },
      {
        name: "Bob Johnson",
        age: 20
      }
    ]
  },
  {
    name: "Capital City College",
    city: "Capital City",
    website: "https://www.capitalcollege.edu",
    student: [
      {
        name: "Charlie Brown",
        age: 21
      }
    ]
  }
];

  return (
    <div>
      {/* <h1>Nested Looping with Components</h1> */}
      {
        collegeDate.map((data,i)=>( 
            <div key={i}>
               <CollegeData data={data}/>
            </div>

        ))
      }
    </div>
  )
}

export default NestedLooping
