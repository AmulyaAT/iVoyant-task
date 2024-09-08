import React from "react";
import { Childmap } from "./childmap";

export const Parentmap: React.FC = () => {
  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];
  return (
    <>
      <h1>Parent Component map</h1>
      <Childmap items={data} />
    </>
  );
};
