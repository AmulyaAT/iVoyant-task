import  { useCallback, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export const Parent:React.FC=()=>{
    const [count , setCount]=useState<number>(0)
    const handleClick = useCallback(()=>{
        setCount(count + 1)
        console.log('handleCLick')
    },[count])
    return(
        <>
        <h2>Count: {count} </h2>
        <CounterDisplay Click={handleClick}/>
        </>
    )
}