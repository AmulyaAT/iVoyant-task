import { useState } from "react";
function useCounter(initialValue : number=0){
    const [count, setCount] = useState<number>(initialValue);
    const Increment = ()=>{
        setCount((prevCount)=>prevCount+1);
    }
    const Decrement = ()=>{
        setCount((prevCount)=>prevCount-1);
    }
    return {count , Increment, Decrement}
}
export default useCounter;