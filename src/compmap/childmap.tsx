import React from "react";
import { Grandchildmap } from "./grandchildmap";
interface Item {
  id: number;
  name: string;
}

interface Childmapprops {
  items: Item[];
}
export const Childmap = (props: Childmapprops) => {
  return (
    <>
      <h2>Child Component map</h2>

      {props.items.map((item) => (
        <p key={item.id}>
          {item.id} {item.name}
        </p>
      ))}
       <Grandchildmap items={props.items} />
    </>

  );
};
