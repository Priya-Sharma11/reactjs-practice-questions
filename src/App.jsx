import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeUser from './Basics Questions/WelcomeUser'
import ItemList from './Basics Questions/ItemList'
import ImageCard from './Basics Questions/ImageCard'
import DynamicButton from './Basics Questions/DynamicButton'
import Counter from './States and Event Handling/Counter'
import Form from './States and Event Handling/Form'
import Toggle from './States and Event Handling/Toggle'
import DisplayTime from './States and Event Handling/DisplayTime'
import DropdownMenu from './States and Event Handling/DropDownMenu'
import StatusMessage from './Basics Questions/StatusMessage'
import InputForm from './States and Event Handling/InputForm'
import Todo from './States and Event Handling/Todo'
import MultiInputForm from './States and Event Handling/MultiInputForm'
import FetchDataComponent from './UseEffect/FetchDataComponent'
import CountDownTimer from './UseEffect/CountDownTimer'

function App() {
  const items = ['Apple','Mango','Grapes','Date'];

  const imgUrl = 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg'
  const description = "A Cat With Goggles"

  const handleClick=()=>{
    alert("Button clicked");
  }

  return (
    <>
      <div>
        {/* <WelcomeUser name="Priya"/>
        <ItemList items ={items}/>
        <ImageCard imgUrl={imgUrl} description={description}/>
        <DynamicButton label="hello" onclick={handleClick}/>
              
        */}
        {/* <StatusMessage isActive = {true}/> */}

        {/* <Counter/> */}

       {/*  <Form/> */}

       {/* <Toggle/> */}
      {/*  <DisplayTime/> */}

      {/* <DropdownMenu/> */}
      
  {/*     <InputForm/> */}
  {/* <Todo/> */}
{/*   <MultiInputForm/>
 */}
 {/*  <FetchDataComponent/> */}
  <CountDownTimer/>
 
        </div>
    </>
  )
}

export default App
