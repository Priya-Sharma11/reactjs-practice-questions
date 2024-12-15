//Component that Implements a Countdown Timer Using useEffect

import React, { useEffect, useState } from 'react'

const CountDownTimer = () => {
  const[seconds,setSeconds] = useState(60);

  useEffect(()=>{
    if(seconds<=0)return;

    const timer = setInterval(()=>{
      setSeconds((prev)=>prev-1);
    },1000)

    return ()=>clearInterval(timer);
  },[seconds])

  return (
    <div>
      <h2>CountDown Timer</h2>
      <h3>{seconds} remaining</h3>
    </div>
  )
}

export default CountDownTimer
