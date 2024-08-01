import React, { useEffect , useState } from "react";
import './Fetch.css';
function FetchingApi(){
    const [data , setData] = useState(null)
    const [loading , setloading] = useState(null)


    // ? take a function
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response =>{
            Response.json()
            setloading(false) // TODO after fetching data from API set Loading false == loading finish
        }).catch(error=>{
            console.log(`error while fetching API ${error}`)
            alert(`${error}`)
            setloading(false) // TODO if error occurred stop Loading and show alert message
        })
    })

    if(loading){
        <div>loading...</div>
    }



    return (
        <>
        <h1>Fetching Data from API </h1>
        <a>https://jsonplaceholder.typicode.com/posts</a>
        <div>
            <h3>Data after fetching</h3>
            {/* <ul>
            {data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
            </ul> */}
        </div>
        </>
    )

}
export default FetchingApi