import { useCallback, useState } from "react";
import { FilteredList } from "./FilteredList";

const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple", "Mango","Jackfruit"];
export const ItemList = () => {
    const [filter, setFilter] = useState("");
    
    const getFilteredItems = useCallback(() => {
      return items.filter((item) =>
        item.toLowerCase().includes(filter.toLowerCase())
      );
    }, [filter]);
  
    return (
      <div>
        <input
          type="text"
          placeholder="Filter items"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <FilteredList items={getFilteredItems()} />
      </div>
    );
  };