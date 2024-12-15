import React from 'react'

//React component that accepts an image URL and a description via props and displays them:

const ImageCard = ({imgUrl, description}) => {
  return (
    <div>
      {imgUrl ? (
        <img 
          src ={imgUrl}
          alt={description}
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      ) : (
        <p>No image available</p>
      )}
    </div>
  )
}

export default ImageCard
