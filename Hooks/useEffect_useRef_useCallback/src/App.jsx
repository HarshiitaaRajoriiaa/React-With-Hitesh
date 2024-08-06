import { useState , useCallback , useEffect , useRef} from 'react'
// import './App.css'

function App() {
  const [length , setLength] = useState(8) //* initial length will be 8
  const [number , numberAllowed]= useState(false)
  const [char, specialCharAllowed]= useState(false)
  const [password , setPassword] = useState(" ") //*initially nothing
  const [popupVisible, setPopupVisible] = useState(false); 


//TODO generate random password using alphanumeric characters corresponding to the conditions. [ number allowed? , special character allowed?]
  const generator = useCallback(()=>{
    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+= "0123456789"
    if(specialCharAllowed) str+= "!@#$%^&*(){}:?|[]"
    for (let i  = 1; i  <= length; i ++) {
      let index = Math.floor((Math.random()*str.length)+1) 
        pass +=str.charAt(index);     
    }
    setPassword(pass);

  } , [length, number,char , setPassword])
  useEffect(()=>{
      generator()
  } , [length , numberAllowed , specialCharAllowed])
  const passRef = useRef(null)
  const copy = useCallback(()=>{
    // passRef.current?.select();
      window.navigator.clipboard.writeText(password)
      setPopupVisible(true);
      setTimeout(() => {
        setPopupVisible(false); // Hide popup after 2 seconds
      }, 1000);
      console.log(password)
    }  , [password])
  

  return (
    <>
    <h1 className='text-sky-700 text-center text-4xl m-36 mb-10 items-center font-thin flex justify-center'><i>Password Generator:</i></h1>
    {/* <div className='height-[200] bg-sky-700 width-[600] ml-12 items-end justify-center rounded-2xl'></div> */}
    <div className='bg-slate-800 text-sky-700 rounded-2xl w-full h-auto p-10 mx-auto my-auto shadow-2xl '>
      <div className= 'bg-white text-blue-950 rounded-2xl w-full h-10 overflow-hidden mb-4 flex'>
        <input 
        className='outline-none w-full py-1 px-3'
        type ="text"
        value ={password}
        placeholder="password"
        readOnly
        ref={passRef}
        />
        <button 
        onClick={ copy}
        className='outline-none bg-lime-700 text-white px-3 py-0.5 shrink-1 rounded-lg ml-7 '
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer '
          onChange={(e)=>{
            setLength(e.target.value)
          }}
          />
          <label className='mr-2'>Length : {length}</label>
          <input 
          type="checkbox"
          defaultChecked = {numberAllowed}
          onChange={()=>{
            numberAllowed((previous)=>{
              !previous;
            }) 
          }}  
          />
          <label className='mr-2'>Special character?</label>
          <input 
          type="checkbox"
          defaultChecked = {specialCharAllowed}
          onChange={()=>{
            specialCharAllowed((previous)=>{
              !previous;
            }) 
          }}  
          />
          <label className='mr-2'> Numbers? </label>
          {popupVisible && (
          <div className='absolute top-20 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded'>
            Password copied to clipboard!
          </div>
        )}
        </div>
      </div>
    </div>

    </>
  )
}

export default App
