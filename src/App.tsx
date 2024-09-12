import "./App.css";
import { DataFetch } from "./component/Fetchdata";
import { Logger } from "./component/Logging";
import { SimpleArray } from "./Components/State/Array";
import { Textinput } from "./Components/State/Inputtext";
import { LoggedIn } from "./Components/State/LoggedIn";
import { UserForm } from "./Components/State/Object";
import { AgeInput, Counter, Users } from "./Components/State/revise";
import { ToggleSwitches } from "./Components/State/ToggleSwitch";
import { User } from "./Components/State/User";

function App() {
  return (
    <>
      <LoggedIn />
      <User />
      <Textinput />
      <ToggleSwitches />
      <Logger />
      <DataFetch />
      <Counter />
      <Users />
      <AgeInput />
      <UserForm />
      <SimpleArray />
    </>
  );
}

export default App;
