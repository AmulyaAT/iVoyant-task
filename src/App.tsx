import React, { useEffect, useState } from 'react'
import DataDisplay from './components/DataDisplay'
import withLoading from './components/withLoading'
import './App.css'

const DataDisplayWithLoading = withLoading(DataDisplay);

const App:React.FC=()=>{
  const [data, setData] = React.useState<string|null>(null);
  const [isLoading , setIsLoading]=useState<boolean>(true);

  useEffect(()=>{
    setTimeout(()=> {
        setData('Data Loaded')
        setIsLoading(false)
    },2000)
  },[])

  return(
    <div className="App">
      <DataDisplayWithLoading data={data ?? ''} isLoading={isLoading} />
    </div>
  )
}

export default App
