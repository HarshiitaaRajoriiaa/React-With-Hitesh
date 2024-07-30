import { useState } from 'react' // TODO hook import here useState is imported u can import more like import { useState  , useEffect} from 'react'
import './App.css'

function App() {
  let counter = 0;
  const addValue = ()=>{
      console.log("add clicked")
      counter++;
  }
  return (
    <>
      <h1>hello world</h1>
      <h2>Counter value :  {counter}</h2>  
      <button onClick={ addValue}>+</button> 
      <br></br>
      <br></br>
      <button onClick={ ()=>{
        console.log("minus clicked");
        counter--;
      }}>-</button>
    </>
  )
}
export default App


// ? NOTE: here we can see counter isn't updating even after using the function and clear working as well. which is happening because in REACT UI manipulation is under controlled by REACT itself .