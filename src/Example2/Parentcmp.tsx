import React, { useCallback, useState } from "react";
import { Child } from "./Childcmp";
export const Parentexp:React.FC=()=>{
    const [name, setName]=useState('ashwini')
    const handleClick=useCallback(()=>{
        setName(name ==="amulya" ?"ashwini" : "amulya");
        console.log(`name changed to ${name}`);
    },[name , setName])
    return(
        <>
        <h3>Names : {name}</h3>
        <Child Click={handleClick}/>
        </>
    )
}