import  { useState } from "react";


function useToggle(){
    const [toggle,setToggle]=useState<boolean>(true)
    const handleToggle=()=>{
      setToggle((toggle)=>!toggle)
      console.log(toggle)
    }
    const handleText=()=>{
        console.log("Toggled Text")
  
    }
    return{toggle,setToggle,handleToggle,handleText}
}
export default useToggle;