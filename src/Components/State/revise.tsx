import React from "react";
import { useState } from "react";
export const Counter=()=>{
    const [count,setCount]=useState <number>(0);
    const handleCount=()=>{setCount(count+1)}
    const handleDec=()=>{setCount(count-1)}
    return(
        <>
        <button onClick={handleCount}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        <h1>Count {count}</h1>
        </>
    )
}