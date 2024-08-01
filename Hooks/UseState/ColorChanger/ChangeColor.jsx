import './ChangeColor.css';
import { useState } from 'react';

function ChangeColor(){
  const [color, setColor] = useState("#242424"); //hook called

  function changeColor(Color) {
    setColor(Color);
    document.body.style.backgroundColor = Color;
  }
  return (
    <>
    <div>
      <button className="blue" onClick={() => {
        setColor("#03346E");
        document.body.style.backgroundColor = "#03346E"
      }
      }
        ></button>
      <button className="pink" onClick={() => changeColor("#FF407D")}></button>
      <button className="yellow" onClick={() => changeColor("#FFD35A")}></button>
      <button className="red" onClick={() => changeColor("#DD0A35")}></button>
      <button className="violet" onClick={() => changeColor("#686EE2")}></button>
      <button className="white" onClick={() => changeColor("#FEF3E2")}></button>
      <button className="orange" onClick={() => changeColor("#FD8C04")}></button>
      <button className="green" onClick={() => changeColor("#74C365")}></button>
    </div>
    <div>
       <button class="back" onClick={()=>{changeColor("#242424")}}>Revert Back to Original color</button>
    </div>
    </>
  );
}
export default ChangeColor;

// function App() {
//   const [color, ChangeColor] = useState("#242424"); //background color to be set to black // initial state

//   //? Use useEffect to update the body background color whenever the color state changes
//   useEffect(() => {
//     document.body.style.backgroundColor = color;
//   }, [color]);

//   return (
//     <>
//       <div>
//         <button className="blue" onClick={() => { ChangeColor("#03346E") }}></button>
//         <button className="pink" onClick={() => { ChangeColor("#FF407D") }}></button>
//         <button className="yellow" onClick={() => { ChangeColor("#FFD35A") }}></button>
//         <button className="red" onClick={() => { ChangeColor("#DD0A35") }}></button>
//         <button className="violet" onClick={() => { ChangeColor("#686EE2") }}></button>
//         <button className="white" onClick={() => { ChangeColor("#FEF3E2") }}></button>
//         <button className="orange" onClick={() => { ChangeColor("#FD8C04") }}></button>
//         <button className="green" onClick={() => { ChangeColor("#74C365") }}></button>
//       </div>
//       <div>
//         <button class="back" onClick={()=>{ChangeColor("#242424")}}>Revert Back to Original color</button>
//       </div>
//     </>
//   )
// }
