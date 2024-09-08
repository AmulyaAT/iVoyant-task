import React from "react";
import { Greatgrandchild } from "./Greatgrandchild";
type Grandchildprops={
    placess : string;
}

export const Grandchild=(props:Grandchildprops)=>{
    return(
        <>
        <h1>Grandchild component</h1>
        <p>Placess: {props.placess}</p>
        <Greatgrandchild placesss={props.placess}  />
        </>
    )
}