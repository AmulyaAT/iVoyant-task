import React from "react";
import { useState } from "react";

export const Counter:React.FC=()=>{
    const [count,setCount]=useState<number>(0);

    const Increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    const clear=()=>{
        setCount(0)
    }
    return(
        <>
        <h2>Count : {count}</h2>
        <button onClick={Increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={clear}>clear</button>
        </>
    )
}