import React from 'react'

const DynamicButton = ({label,onclick}) => {
  return (
    <div>
      <button onClick={onclick}>{label}</button>
    </div>
  )
}

export default DynamicButton
