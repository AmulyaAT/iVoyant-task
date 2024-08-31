import React from "react";
import { employees} from '../db'
import { EmployeeProfile } from "./EmployeeProfile";
export const EmployeeDetails =()=>{

    return(
        
        <>
        <EmployeeProfile amulya={employees} />
        </>
        
    )  
       
}