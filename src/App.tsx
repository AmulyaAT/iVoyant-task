// import { Names } from "./components/Names";
import {EmployeeDetails} from "./components/Employeedetails";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
// import { EmployeeProfile } from "./components/EmployeeProfile";
import { EmployeeInfo } from "./components/EmployeeInfo";
function App() {
  return (
    
      <Router>
      <Routes>
        <Route path="/Employeedetails" element={ <EmployeeDetails /> } />
        {/* <Route path="/EmployeeProfile" element={<EmployeeProfile amulya={[]} />} /> */}
        <Route path="/Employeedetails/employee/:id" element={<EmployeeInfo />} />
      </Routes>
      </Router>
  );
}
export default App;
