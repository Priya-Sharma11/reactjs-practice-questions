import React, { useState } from 'react'

const Todo=()=>{
  const[tasks,setTasks] = useState([]);
  const[newTask,setNewTask] = useState("");

  const addNewTask=(e)=>{
    if(newTask.trim()!==""){
      setTasks([...tasks,newTask]);
      setNewTask("");
    }
  }

  const deleteTask=(index)=>{
    setTasks(tasks.filter((_,i)=>i!==index));
  }

  return(
    <>

      <input
        type='text'
        value={newTask}
        onChange={(e)=>setNewTask(e.target.value)}
      />

      <button onClick={addNewTask}>Add</button>
      <ul>
        {tasks.map((task,index)=>(
          <li key={index}>{task}
          <button onClick={()=>deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo;