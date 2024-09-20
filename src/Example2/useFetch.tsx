import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      {
        const response = await fetch(url);
        console.log(data)
        if (!response.ok) {
          alert("network response error");
        }
        const result = await response.json();
        setData(result);
      }
    };
    fetchData();
  }, [url]);
  return { data };
}
export default useFetch;