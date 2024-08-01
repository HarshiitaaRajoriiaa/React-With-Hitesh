import { useState } from 'react' //import hooks from react
import './Counter.css'
function CounterProject() {
  
     let [counter , setCounter]  = useState(0); //return array
  return (
    <>
      <div class="main">
      <h1 class="text">Counter:</h1>
      <div class ="rect"></div>
      <div class="display">{counter}</div>
      <button class = "add" onClick={ ()=>{
        console.log("add clicked")
        setCounter(counter + 1);
      } } disabled={counter >= 20}>+</button>
      <button class ="minus" onClick={()=>{
        console.log("minus clicked")
        setCounter(counter - 1);
      }} disabled={counter < 1}>-</button>
      </div>
    </>
  )
}
export default CounterProject // * function to be export 
