import React from "react";
 type clicktype={
    Click :()=>void;
    }
export const Child:React.FC<clicktype>=({Click})=>{
    return(
        <>
        <button onClick={Click}>Click</button>
        </>
    )
}