import React from 'react'
//Create a React component that takes a user’s name as a prop and displays a welcome message.

const WelcomeUser = ({name}) => {
  return (
    <div>
      Welcome {name}
    </div>
  )
}

export default WelcomeUser
