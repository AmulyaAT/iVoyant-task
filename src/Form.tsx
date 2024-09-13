import React from "react";
import { useState } from "react";

export const Form: React.FC = () => {
  const [text, setText] = useState<string>("");
  const handleSubmit=()=>{
    if(text===""){
        alert("Please enter input cannot be empty")
    }else
   { console.log("text=",text)
    setText("");}
  }
  return (
    <div>
        <h2>Basic input Form</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>{text}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
