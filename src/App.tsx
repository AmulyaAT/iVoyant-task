import "./App.css";
import { Logger } from "./component/Logging";
import { SimpleArray } from "./Components/State/Array";
import { Counting } from "./Components/State/Counterwithhistory";
import { Textinput } from "./Components/State/Inputtext";
import { LoggedIn } from "./Components/State/LoggedIn";
import { UserForm } from "./Components/State/Object";
import { AgeInput, Counter, Users } from "./Components/State/revise";
import { Toggle } from "./Components/State/ToggleSwitch";
import { User } from "./Components/State/User";

function App() {
  return (
    <>
      <LoggedIn />
      <User />
      <Textinput />
      <Logger />
      <Counter />
      <Users />
      <AgeInput />
      <UserForm />
      <SimpleArray />
      <Counting />
      <Toggle />
    </>
  );
}

export default App;
