import React, { useState } from 'react'
//Create a counter component with buttons to increase, decrease, and reset the count using state.

const Counter = () => {

  const [count,setCount] = useState(0);

  const handleIncrease=()=>{
    setCount(count+1);
  }

  const handleDecrease=()=>{
    if(count>0){
    setCount(count-1);
    }
  }

  const handleReset =()=>{
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrease}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter
