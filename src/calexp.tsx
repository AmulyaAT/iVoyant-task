import { useCallback, useState } from "react";

export const Calexp:React.FC=()=>{
const[count,setCount]=useState<number>(0)

const increment=useCallback(()=>{
    setCount(prevCount=>prevCount+1)
},[])


return(
    <>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    </>
)
}