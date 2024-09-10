import React from "react";

//Red green testing

type Greetprops = {
  name?: string;
};
export const Greet: React.FC<Greetprops> = ({ name }) => {
  return <div>Hello {name}</div>;
};
