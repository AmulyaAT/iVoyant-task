import React from "react";
import useCounter from "./useCounter";

export const Counter:React.FC=()=>{
    // const [count , setCount] = useState(0)

    // const Increment = ()=>{
    //     setCount((prevCount)=>prevCount + 1)
    //     console.log("count incremented")
    // }

    // const Decrement = ()=>{
    //     if(count>0){
    //         setCount((prevCount)=>prevCount -1)
    //     }
    //     else{
    //         alert("Count cannot be less than 0")
    //     }
    // }
    const {count , Increment,Decrement}=useCounter(0)
    return(
        <>
        <h5>Count : {count}</h5>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        </>
    )
}