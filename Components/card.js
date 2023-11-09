import React from 'react'

function card({employees}) {
    console.log(employees)
  return (
    <div className="container">
        {employees.map((employee)=>{
            <div key={employee.id}>
                <h3>{employee.name}</h3>
                <p>{employee.id}</p>
                <p>{employee.position}</p>
            </div>
        })}

    </div>
  )
}

export default card