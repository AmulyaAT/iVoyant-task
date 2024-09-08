import React from "react";

type Greatgrandchildprops={
    placesss:string;
}
export const Greatgrandchild=(props:Greatgrandchildprops)=>{
    return(
        <>
        <h1>Greatgrandchild</h1>
        <p>Placesss: {props.placesss}</p>
        </>
    )
}