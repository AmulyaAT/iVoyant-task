import useCounter from "./useCounter";
export const FancyCounter=()=>{
    const {count , Increment , Decrement}=useCounter(0)
    return(
        <>
        <h4>{count}</h4>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        </>
    )
}