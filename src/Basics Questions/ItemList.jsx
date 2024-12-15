import React from 'react'


//Build a functional component that renders a list of items passed to it via props.

const ItemList = ({items}) => {
  return (
    <div>
      <h1>List of Items</h1>
      <ul>

      {items && items.length>0 ? (
        items.map((item,index)=><li key={index}>{item}</li>)
      ) : (
        <p>No items to display</p>
      )}

      </ul>
    </div>
  )
}

export default ItemList
