import React ,{useState,useEffect} from 'react'

const FetchDataComponent = () => {
  const[data,setData] = useState(null);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((data)=>{
      setData(data)
    })
    .catch((error)=>{console.log(error)})
},[]);
  return (
    <div>
      <h2>Fetched Data: </h2>
      <ul>
      {data ? (data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))):(
          <li>No Data</li>
        )}
      </ul>
    </div>
  )
}

export default FetchDataComponent
