type Listprops = {
  Lists: {
    first: string;
    last: string;
  };
};
export const List = ({ Lists }:Listprops) => {
  console.log(Lists);
  return (
    <>
      <p>
        i'm {Lists.first} {Lists.last}
      </p>
    </>
  );
};
