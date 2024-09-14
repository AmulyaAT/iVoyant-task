import React, { useEffect } from "react";
import { useState } from "react";

export const FetchData :React.FC=()=>{
    const [data, setData]=React.useState<any[]>([])
    useEffect(()=>{
        const fetchData=async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
            const result=await response.json()
            setData([result])
        }
        fetchData()
    },[])   
    return(
        <>
            <h2>Fetched posts : </h2>
            <ul>
                {data && data.map((item: any) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </>
    )
}