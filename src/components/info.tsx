import { List } from "./List";
type Infprops = {
  city: string;
  college: string;
  email: string;
};
export const Info = (props: Infprops) => {
  const UserLists = {
    first: "amulya",
    last: "a t",
  };
  return (
    <>
      <div>
        <p> {props.city}</p>
        <p>{props.college} </p>
        <p>{props.email} </p>
      </div>
      <List Lists={UserLists} />
    </>
  );
};
