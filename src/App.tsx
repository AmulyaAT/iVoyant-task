import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { EmployeeDetails } from "./components/Employeedetails"; // Updated import name
import { EmployeeInfo } from "./components/EmployeeInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeDetails />} />
        <Route path="/Employeedetails" element={ <EmployeeDetails /> } />
        {/* Route for Employee Details Page */}
        <Route path="/Employeedetails/employee/:id" element={<EmployeeInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
