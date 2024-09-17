import React, { useEffect, useState } from "react";


export const Datafetch:React.FC=()=>{
    const [data, setData] = useState();
    
    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/todos/1')
       .then(response=>response.json())
       .then(data=>setData(data))
       .catch(error=>console.log('Error:', error))
      
    },[])
    return(
        <>
        <h1>DATA : {JSON.stringify(data)}</h1>
        </>
    )
}