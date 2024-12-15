import React from 'react'

const StatusMessage = ({isActive}) => {
  return (
    <div>
      {isActive ?(
        <p>Active</p> 
      ) : (
      <p>InActive</p>
      )}
    </div>
  )
}

export default StatusMessage
