import "./App.css";
import { ItemList } from "./Challenge/ItemList";
import { Parent } from "./components/ParentComponent";
import { Parentexp } from "./Example2/Parentcmp";
import { ParentForm } from "./Form example/ParentForm";

function App() {
  return (
    <>
      <Parent />
      <Parentexp/>
      <ParentForm/>
      <ItemList/>
    </>
  );
}
export default App;