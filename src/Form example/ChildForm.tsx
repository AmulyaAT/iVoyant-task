import React from "react";
interface submittype {
  submit: () => void;
}
export const ChildForm: React.FC<submittype> = ({ submit }) => {
  return (
    <>
      <button onClick={submit}>Submit</button>
    </>
  );
};
