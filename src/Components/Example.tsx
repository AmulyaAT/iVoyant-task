import React from "react";
import { useEffect } from "react";
export const Example:React.FC=()=>{
    useEffect(()=>{
        console.log("inside useeffect")
        return(console.log(" inside return"))
    },[])
    return(
        <>
    <p>Check console</p>
        </>
    )
}