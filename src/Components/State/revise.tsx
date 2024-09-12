import React from "react";
import { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  return (
    <>
      <button onClick={handleCount}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <h1>Count {count}</h1>
    </>
  );
};

export const Users: React.FC = () => {
  const [users, setUsers] = useState<string>("");
  return (
    <>
      <h2>My name is {users}</h2>
      <input
        type="text"
        value={users}
        onChange={(e) => setUsers(e.target.value)}
      />
    </>
  );
};

export const AgeInput: React.FC = () => {
  const [age, setAge] = useState<number>(0);
  return (
    <>
      <p>my age is {age}</p>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
    </>
  );
};
