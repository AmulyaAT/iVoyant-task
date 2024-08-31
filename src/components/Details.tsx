import { Info } from "./info";
type detailprops = {
  detail: string;
};
const Details = (props: detailprops) => {
  return (
    <div>
      <h1>{props.detail}</h1>
      <Info college={"BIET"} city={"DAVANAGERE"} email={"ammz@gmail.com"} />
    </div>
  );
};

export default Details;
