import React from "react";

type Greatgreatgrandchildprops={
    namesss:string;
}
export const Greatgreatgrandchild = (props:Greatgreatgrandchildprops) => {
    return(
        <>
        <h1>Greatgreatgrandchild component</h1>
        <p>name:{props.namesss}</p>
        </>
    )
}