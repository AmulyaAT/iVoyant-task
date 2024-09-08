import './App.css';
import { Parent } from './components/parent';
import { Parentmap } from './compmap/parentmap';

function App() {
  return (
    <div className="App">
      <Parent place='dvg' name="amulya"/>
      <Parentmap/>
    </div>
  );
}

export default App;
