import React, { useCallback } from "react";
import { useState } from "react";
import { ChildForm } from "./ChildForm";
export const ParentForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const handlesubmit = useCallback(() => {
    console.log(`Name is ${name} and Age is ${age}`);
  }, [name, age]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(String(e.target.value))}
        placeholder="Enter your name :"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Enter your age :"
      />
      <ChildForm submit={handlesubmit} />
    </div>
  );
};