import React from "react";
import useForm from "./useForm";

export const Form = () => {
  const { name, place, setName, setPlace } = useForm();
  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        value={place}
        placeholder="Enter Place"
        onChange={(e) => {
          setPlace(e.target.value);
        }}
      />
      <button onClick={() => console.log(`Name: ${name} , Place: ${place}`)}>
        Submit
      </button>
    </>
  );
};
