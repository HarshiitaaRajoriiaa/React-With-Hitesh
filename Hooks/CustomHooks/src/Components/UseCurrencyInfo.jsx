import React, { useEffect , useState } from "react";
// ? useEffect: when 
export default function useCurrencyInfo( currency){
    const [Data, setData] = useState(null)
    useEffect( ()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((data)=>{data.json()}
        )
        .then(data=>{setData(data)})
    }, [currency ] )
    return Data 
    //! doubt here
}

//* main context of hooks do any function, can use other hooks, returns an array and set of dependencies in needed further
//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json