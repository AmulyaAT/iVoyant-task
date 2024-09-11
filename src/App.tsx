import './App.css'
import { Textinput } from './Components/State/Inputtext'
import { LoggedIn } from './Components/State/LoggedIn'
import { ToggleSwitches } from './Components/State/ToggleSwitch'
import { User } from './Components/State/User'

function App() {
  

  return (
    <>
      <LoggedIn/>
      <User/>
      <Textinput/>
      <ToggleSwitches/>
    </>
  )
}

export default App
