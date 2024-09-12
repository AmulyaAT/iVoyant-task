import React from "react";

import { useState } from "react";

export const Counting=()=>{
    const [count,setCount]=useState<number>(0)

    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    return(
        <>
        <h1>Counter {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <h2>History:</h2>
        </>
    )
}


