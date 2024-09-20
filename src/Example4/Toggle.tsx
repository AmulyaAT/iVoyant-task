import React from "react";
import useToggle from "./useToggle";

export const ToggleState=()=>{
    const {toggle,handleToggle,handleText}=useToggle()
    return(
        <>
        <p onClick={handleText}>click to toggle</p>
        <button onClick={handleToggle}>{toggle ?"on":"off"}</button>
        </>
    )
}