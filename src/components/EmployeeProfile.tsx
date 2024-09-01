import React from "react";

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
  return (
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
              <a href={`employee${employee.firstName}`}>
                {employee.firstName}
              </a>
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
  );
};

