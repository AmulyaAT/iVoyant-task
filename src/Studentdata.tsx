import React, { useEffect, useState } from "react";
export const Student = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../db.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.students);
        console.log(data);
      });
  }, [setData]);
  return (
    <>
      <h4>Data : </h4>
      <ul>
        {" "}
        {data.map((student: { id: number; name: string; avatar: string }) => {
          return (
            <>
              <h5>{student.id}</h5>
              <h3>{student.name}</h3>
              <img src={student.avatar} width="100" />
            </>
          );
        })}
      </ul>
    </>
  );
};
