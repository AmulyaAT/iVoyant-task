import React from "react";
import { useState } from "react";

export const Toggle = () => {
  const [istoggle, setIstoggle] = useState<boolean>(false);

  const handleToggle = () => {
    setIstoggle(!istoggle);
    console.log("toggle", istoggle ? "dark" : "light");
  }; 
  return (
    <>
      <button onClick={handleToggle}>
        Click 
        {istoggle ? "ON" : "OFF"}
      </button>
    </>
  );
};