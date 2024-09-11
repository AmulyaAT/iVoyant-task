import './App.css'
import { Logger } from './component/Logging'
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
      <Logger/>
    </>
  )
}

export default App
