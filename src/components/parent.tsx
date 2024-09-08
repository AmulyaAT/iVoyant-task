import React from "react";
import { Child } from "./Child";

type ParentProps = {
  place: string;
  name:string;
};

export const Parent = (props: ParentProps) => {
  return (
    <>
      <h1>Parent component</h1>
      <p>place: {props.place} <br/> name : {props.name}</p>
      <Child places={props.place} names={props.name} />
    </>
  );
};
