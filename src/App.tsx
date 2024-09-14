import "./App.css";
import { Counter } from "./Components/Counter";
import { FetchData } from "./Components/Datafetch";
import { Example } from "./Components/Example";


function App() {
  return <>
  <Counter/>
  <Example/>
  <FetchData/>
  </>;
}

export default App;
