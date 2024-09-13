import React, { useEffect } from "react";

export const Counter:React.FC=()=>{
    const [count, setCount]=React.useState(0);
    useEffect(()=>{
        console.log("counter",count)
    },[count])
    return(
        
        <>
        <p>Count : {count}</p>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
        </>
    )
}