import { useEffect ,useState} from "react";

export const DataFetch=()=>{
    const [data,setData]=useState<any>(null)
    useEffect(()=>{
        const fetchdata=async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const result=await response.json()
            setData([result])
        }
        fetchdata()
       
    },[])
    return(
        <div>
      <ul>
        {data && data.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
    )
}