import {useEffect , useState } from 'react';
function useCurrencyInfo(currency){
    const [curr , setCurr] = useState({})
    useEffect(()=>{
// *https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
    } , [])
    .then((data)=> data.json())
    .then()
    .catch()
    return [];
}