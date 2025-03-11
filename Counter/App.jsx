import { useState } from 'react' //import hooks from react
import './App.css'

function App() {


  
  let [counter, setCounter] = useState(5); //return array

  const minusValue = () => {
    console.log("minus clicked")
    setCounter(counter - 1);
  }
  return (
    <>
      <div class="main">
        <h1 class="text">Counter:</h1>
        <div class="display">{counter}</div>
        <button class="add" onClick={() => {
          console.log("add clicked")
          setCounter(counter++); // counter = 1
          // ? what will happen??
          // setCounter(counter++); // counter = 2 or not
          // setCounter(counter++); // counter = 3 or not
          // setCounter(counter++); // counter = 4 or not
          // ! in react useState send all the changes to UI in batches like setCounter(counter + 1); in every line doing same that's why it is considering it as same in all the lines. 
          // that's why value incremented to 1 only irrespective of how many times you have been call the method setCounter()
          setCounter((previousValue) => previousValue + 1);
          setCounter((previous) => previous + 1);
          setCounter((Counter) => Counter + 1);
          setCounter((previousValue) => {
            return previousValue + 1;
          });
          // now this will update value by 1 every time you call it. previousValue is a variable can have any other name too.
          //* as setCounter returns a callback function and previous value of whatever you put it on.
        }} disabled={counter >= 20}>+</button>
        <button class="minus" onClick={minusValue} disabled={counter < 1}>-</button>
      </div>
    </>
  )
}
export default App
