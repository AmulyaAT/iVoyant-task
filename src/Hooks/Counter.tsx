import React, { useEffect, useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    console.log("effect", count);
  }, [count]);
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};