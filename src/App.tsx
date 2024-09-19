import "./App.css";
import { Multiple } from "./Hooks/Multipledep";
import { Student } from "./Studentdata";
import { Count } from "./Hooks/Cleanex";
import { Counter } from "./Hooks/Counter";
import { Example } from "./Hooks/Example1";
import { Timer } from "./Hooks/Timer";
function App() {
  return (
    <>
      <Example />
      <Counter />
      <Count />
      <Timer />
      <Student />
      <Multiple />
    </>
  );
}
export default App;
