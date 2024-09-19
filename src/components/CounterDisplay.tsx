import React from "react";

interface Clicktype {
    Click :()=> void;
}
export const CounterDisplay:React.FC<Clicktype>= ({Click})=>{
    return(
        <>
        <button onClick={Click}>Increment</button>
        </>
    )
}