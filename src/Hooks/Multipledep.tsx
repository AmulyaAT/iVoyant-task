import React, { useEffect, useState } from "react";

export const Multiple: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("ashwini");
  useEffect(() => {
    console.log(`Count: ${count}, Name: ${name}`);
    return console.log("cleanup function");
  }, [count, name]);
  const handleCount = () => {
    setCount(count + 1);
  };
  const handlename = () => {
    setName(name === "amulya " ? "ashwini" : "amulya");
  };
  return (
    <>
      <h4>count : {count}</h4>
      <button onClick={handleCount}>+</button>
      <div>
        <button onClick={handlename}> change name </button>
        <h5>{name}</h5>
      </div>
    </>
  );
};
