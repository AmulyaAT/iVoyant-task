import { useEffect } from "react";

export const Logger=()=>{
    useEffect(()=>{
        console.log("hii")
        return(
            console.log("bye")
        )
    },[])
    return (
        <div>
        see console
        </div>
    )
}