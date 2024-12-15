

import React, { useState } from 'react'

const InputForm=()=>{
  const[inputValue, setInputValue] = useState("");

  const handleInput=(e)=>{
    setInputValue(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputValue);
    setInputValue("");
  }
  return(

    <>
    <label>
      Enter Something: 
      <input
        type='text'
        value={inputValue}
        onChange={handleInput}
      />
      </label>

      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default InputForm;