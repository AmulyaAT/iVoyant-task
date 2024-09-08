import { useNavigate } from "react-router-dom";
import { Employee } from "./EmployeeInfo";

type EmployeeProfileProps = {
  amulya: Employee[];
};

export const EmployeeProfile = ({ amulya }: EmployeeProfileProps) => {
  const navigate = useNavigate();

  const handleNameClick = (id: number) => {
    // Navigate to the details route when an employee name is clicked
    navigate(`/Employeedetails/employee/${id}`);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Age</th>
            <th>Position</th>
            <th>Email</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {amulya.map((employee) => (
            <tr key={employee.id}>
              <td>
                <span
                  style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                  onClick={() => handleNameClick(employee.id)}
                >
                  {employee.firstName}
                </span>
              </td>
              <td>{employee.lastName}</td>
              <td>{employee.department}</td>
              <td>{employee.age}</td>
              <td>{employee.position}</td>
              <td>{employee.email}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
