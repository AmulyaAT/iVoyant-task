import { useState } from "react";

export const ToggleSwitches = () => {
  const [isOn,setIsOn]=useState<boolean>(false)
    return(
        <>
        <button onClick={() => setIsOn(!isOn)}>Toggle
        {isOn?"Turnoff":"TurnOn"}
        </button>
        </>
    )
}