import React from "react";
import useFetch from "./useFetch";


export const Datadisplay:React.FC=()=>{
    const {data} =useFetch<{body : string}>("https://jsonplaceholder.typicode.com/posts/1")
  
    return(
        <>
        <h4>Data: {data?.body}</h4>
        </>
    )
}