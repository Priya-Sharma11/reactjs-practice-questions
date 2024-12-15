import React, { useState } from 'react'
//Create a toggle button that switches between "ON" and "OFF" states when clicked.
const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle =()=>{
    setIsOn(!isOn);
  }
  return (
    <div>
      <button onClick={handleToggle}>
        {isOn? 'ON' :'OFF'}
      </button>
    </div>
  )
}

export default Toggle
