import React from "react";


export const FilteredList = React.memo(({ items }: { items: string[] }) => {
    console.log("FilteredList re-rendered");
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  });