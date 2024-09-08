import { useParams } from "react-router-dom";
import { employees } from "../db"; // Import employees data

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  department: string;
  position: string;
  salary: number;
};

export const EmployeeInfo = () => {
  const { id } = useParams<{ id: string }>(); 
  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) {
    return <p>Employee not found</p>;
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>First Name: {employee.firstName}</td>
          </tr>
          <tr>
            <td>Last Name: {employee.lastName}</td>
          </tr>
          <tr>
            <td>Department: {employee.department}</td>
          </tr>
          <tr>
            <td>Age: {employee.age}</td>
          </tr>
          <tr>
            <td>Position: {employee.position}</td>
          </tr>
          <tr>
            <td>Email: {employee.email}</td>
          </tr>
          <tr>
            <td>Salary: {employee.salary}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
