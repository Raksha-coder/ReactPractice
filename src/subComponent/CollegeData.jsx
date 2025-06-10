import React from 'react'

const CollegeData = ({data}) => {
  return (
    <div style={{backgroundColor:"grey",padding:"10px",margin:"10px"}}>
       <h1>{data.name}</h1>
        <ul>
            <li>{data.city}</li>
            <li>{data.website}</li>
        </ul>
        <h3>Students</h3>
        {
            data.student.map((student,i)=>(
                <ul key={i}>
                    <li>{student.name}</li>
                    <li>{student.age}</li>
                </ul>

            ))
        }
    </div>
  )
}

export default CollegeData
