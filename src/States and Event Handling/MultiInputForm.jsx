//Create a form that updates and displays multiple input values using a single state object.

import React, { useState } from 'react'

const MultiInputForm = () => {

  const[formvalue,setFormValue] = useState({
    fullName:"",
    email:"",
    age:""
  })

  const handleChange=(e)=>{
    const {name,value}= e.target

    setFormValue({...formvalue, 
      [name]:value,
    })
  }

  return (
    <div>
      <label>
        Enter name:
      <input
        type="text"
        name = "fullName"
        value ={formvalue.fullName}
        onChange={handleChange}
      />
      </label>
      <label>
        Enter Email: 
        <input
          type="email"
          name="email"
          value={formvalue.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Age:
        <input
        type="number"
        name="age"
        value={formvalue.age}
        onChange={handleChange}
        
        />
      </label>

      <h2>Form Values</h2>
      <p>Full Name : {formvalue.fullName}</p>
      <p>Email : {formvalue.email}</p>
      <p>Age : {formvalue.age}</p>
    </div>
  )
}

export default MultiInputForm
