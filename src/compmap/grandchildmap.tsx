import React from "react";

interface Item {
    id: number;
    name: string;
  }
  
  interface GrandchildmapProps {
    items: Item[];
  }
export const Grandchildmap=(props:GrandchildmapProps)=>{
    return(
        <>
        <h3>Grandchild Component map</h3>
        {props.items.map((item) => (
          <div key={item.id}>
            <p>
              {item.id}: {item.name} - from Grandchildmap
            </p>
          </div>
        ))}
      </>
    )
}