import React from "react";

import { useState } from "react";
 export const Toggle:React.FC=()=>{
  const[on,setOn]=useState<boolean>(false)
  const toggle=()=>{
    setOn(!on)
    console.log("Toggled",on)
  }
  return(
    <>
    <button onClick={toggle}>
      {on ?"switch off" : "Switch on"}
    </button>
    </>
  )
 }