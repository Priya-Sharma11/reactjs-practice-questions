import React, { useEffect, useState } from 'react'

//	Build a component to display the current time that updates every second using state.

const DisplayTime = () => {
  const [time,setTime] = useState(new Date().toLocaleTimeString());

  useEffect(()=>{
    const timer = setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
    },1000)

    return () => clearInterval(timer);
  },[])
  return (
    <div>
      <h3>Current Time: {time}</h3>
    </div>
  )
}

export default DisplayTime
