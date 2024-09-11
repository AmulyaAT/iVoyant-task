import { useState } from "react";


export const Textinput =()=>{
    const [text, setText] = useState<string>("");

    return(
        <>
        <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} />
        <p>You typed :{text}</p>
        </>
    )
}