import useCurrencyInfo from './Components/UseCurrencyInfo'
import { useState } from 'react'
import './App.css'
import InputBox from './Components/MainContainer'
function App() {
const [amount, setAmount] = useState()
const [from , setFrom] = useState("usd")
const [convertedAmount , setConvertedAmount] =useState()
 const currInfo = useCurrencyInfo(from)
  return (
    <>
    <InputBox />
    </>
  )
}

export default App
