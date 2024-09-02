import React from "react"

type Employee={
    id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  department: string;
  position: string;
  salary: number;
}

type EmployeeInfoProps = {
    employee: Employee;
  };

export const EmployeeInfo =({employee}:EmployeeInfoProps)=>{
  console.log("employee info ",employee)
    return(
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
    )
}