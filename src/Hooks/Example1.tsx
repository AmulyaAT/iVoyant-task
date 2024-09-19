import React from "react";
import { useEffect, useState } from "react";
export const Example = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [setData]);
  return (
    <>
      <h2>Data</h2>
      <ul>
        {data.map((items: { id: number; name: string; email: string }) => {
          return (
            <>
              <li key={items.id}>{items.name}</li>
              <li>{items.email}</li>
            </>
          );
        })}
      </ul>
    </>
  );
};
