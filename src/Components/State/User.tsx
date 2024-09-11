import { useState } from "react"

type AuthUser={
    name:string
    email:string
}

export const User=()=>{
    const [user,setUser] = useState<null|AuthUser>(null)

    const handleLogin =()=>{
        setUser({
            name:"amulya",
            email:"abc@gmail.com"
        })
    }
    const handleLogout =()=>{setUser(null)}
    return(
        <>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {user?.name}</div>
       <div>User email is {user?.email}</div>
        </>
    )
}

