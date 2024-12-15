import React, { useState } from 'react'

//Create a dropdown menu that updates a message based on the selected option.
const DropdownMenu = () => {
  const [message, setMessage] = useState("Select an Option");

  const handleSelectionChange = (e)=>{
    setMessage(`You selected : ${e.target.value}`);
  }
  return (
    <div >
      <h3>Dropdown Menu</h3>
      <select onChange={handleSelectionChange} 
     style={{
   
      backgroundColor: "#4CAF80", 
      color: "white", // White text color
      
    }}
    >
        <option value=" " disabled
          >Choose an option</option>
        <option value="Hello">Hello</option>
        <option value="Welcome">Welcome</option>
        <option value="Good Morning">Good Morning</option>
        <option value="Good Night">Good Night</option>

      </select>
      <h2>{message}</h2>
    </div>
  )
}

export default DropdownMenu
