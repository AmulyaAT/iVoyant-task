import React from "react"
import { Grandchild } from "./Grandchild"
import { Greatgreatgrandchild } from "./Greatgreatgrandchild";

type Childprops={
    places:string;
    names:string;
}

export const Child=(props:Childprops)=>{
    return(
        <>
        <h1>Child component </h1>
        <p>Places: {props.places} Names : {props.names}</p>
        <Grandchild placess={props.places}  />
        <Greatgreatgrandchild namesss={props.names}  />
        </>
    )
}
