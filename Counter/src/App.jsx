import { useState } from 'react' // TODO hook import here useState is imported u can import more like import { useState  , useEffect} from 'react'
import './App.css'

function App() {
  const [counter , setCounter] = useState(0);
  
  return (
    <>
      <h1>Use State Hook</h1>
      <h2>Counter value : {counter}</h2>  
      <button onClick={()=>{
        console.log("add clicked");
        setCounter(counter+1);
      }} disabled = {counter >=10}>+</button> 
      <br></br>
      <br></br>
      <button  onClick={()=>{
        console.log("minus clicked");
        setCounter(counter -1);
      }} disabled = { counter<=0}>-</button>
    </>
  )
}
export default App


// ? NOTE: here we can see counter isn't updating even after using the function and clear working as well. which is happening because in REACT UI manipulation is under controlled by REACT itself .