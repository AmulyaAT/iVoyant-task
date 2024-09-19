import React from "react";
import { useState, useEffect } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("current state:", count);
      setCount(count);
    }, 9000);

    return () => clearInterval(intervalId);
  }, []);

  console.log("Previous state cleared by timer ", count);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
