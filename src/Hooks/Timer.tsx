import React, { useEffect, useState } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const Amulya = setInterval(() => {
      console.log("initial state", count);
    }, 1000);

    return () => {
      clearInterval(Amulya);
      //setCount(0);
      console.log("clear state", count);
    };
  }, []);

  const handleCount = () => {
    setCount(count + 1);
    console.log("current state ", count);
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={handleCount}>+</button>
    </>
  );
};