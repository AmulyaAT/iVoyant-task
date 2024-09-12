import React, { useState } from "react";

export const SimpleArray:React.FC=()=>{
    const [items,setItems]=useState<string[]>([]);

    const additem=()=>{
        setItems([...items ,`items ${items.length +1}`])
    }

    const removeitem=()=>{
      setItems(items.slice(1))
    }

    const clearitems=()=>{
        setItems([])
    }

    return(
        <>
        <h2>Items: </h2>
        <ul>{items.map((items,index)=>(
           <li key ={index}>{items}</li>
        ))}</ul>
        <button onClick={additem}>add item </button>
        <button onClick={removeitem}>remove item</button>
        <button onClick={clearitems}>clear item</button>
        </>
    )
}