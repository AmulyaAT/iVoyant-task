import React from "react";
import { useState } from "react";

type User={
    name:string
    age:number
}

export const UserForm: React.FC = () => {
  const [user, setUser] = useState<User>({name:"",age:0});
  
  const updateName=(newName:string)=>{
    setUser((prevUser)=>({
        ...prevUser,
        name :newName,
    }))
  }

  const updateAge=(newAge:number)=>{
    setUser((prevUser)=>({
        ...prevUser,
        age:newAge,
    }))
  }
  return (
    <>
      <h2>User name : {user.name}</h2>
      <input
        type="text"
        value={user.name}
        onChange={(e) => {
          updateName(e.target.value);
        }}
      />
      <h2>Age :{user.age}</h2>
      <input
        type="number"
        value={user.age}
        onChange={(e) => {
          updateAge(Number(e.target.value));
        }}
      />
    </>
  );
};
