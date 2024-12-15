//Implement a form with a text input field and a submit button, and display the entered text below the form when submitted.

import React, { useState } from 'react'

const Form = () => {

  const [inputValue,setInputValue] = useState('');
  const [submittedValue , setSubmittedValue] = useState('');

  const handleInputChange=(e)=>{
    setInputValue(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
         value ={inputValue}
          onChange={handleInputChange}
          placeholder='Enter some text'
        />

        <button>Submit</button>
      </form>
      {submittedValue && (
        <div style={{ marginTop: '20px' }}>
        <h4>Submitted Text: </h4>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{submittedValue}</p>
        </div>
      )}
    </div>
  )
}

export default Form
