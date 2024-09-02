import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { employees } from "../db";
import { EmployeeInfo } from "./EmployeeInfo";
type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  department: string;
  position: string;
  salary: number;
};

type EmployeeProfileProps = {
  amulya: Employee[];
};
export const EmployeeProfile = ({ amulya }: EmployeeProfileProps) => {
  const [SelectedEmployee, setSelectedEmployee] = useState<Employee|null>(null);
  const navigate = useNavigate();
  const handleName = (id: number) => {
    const employee = employees.find((emp) => emp.id === id)
    console.log("Selected Employee:", employee)
    if (employee) {
      setSelectedEmployee(employee);
      console.log("employee",employee)
      navigate(`/Employeedetails/employee/${id}`);

    }
    
  
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
          {amulya?.map((employee) => (
            <tr key={employee.id}>
              <td>
                <span
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                  onClick={() => handleName(employee.id)}
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
      {SelectedEmployee && (
      <EmployeeInfo employee={SelectedEmployee} />
    )}
  </>
  );
};
