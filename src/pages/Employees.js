import React from 'react';
import { useState } from 'react';

import '../App.css';
import Header from './Header';
import Employee from '../components/Employee';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';


const Employees = () => {
  const imgURL = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  const[employees, setEmployees] = useState([
    {
      id: 1,
      name: "Minh",
      role: "intern",
      image: imgURL
    },
    {
      id: 2,
      name: "Minh2",
      role: "intern",
      image: imgURL
    },
    {
      id: 3,
      name: "Minh3",
      role: "intern",
      image: imgURL
    },
  ]);

  function updateEmployee(id, newName, newRole){
    console.log("Calling from App.js")
    const updatedEmployee = employees.map((employee) => {
      if(id === employee.id){
        return{...employee, name: newName, role: newRole};
      }
      return employee
    });
    setEmployees(updatedEmployee);
  }

  return (
    <div>
      <Header/>
      <div className="flex flex-wrap justify-center my-4">
        {employees.map((employee) => {
          const editEmployee = <EditEmployee id={employee.id} name={employee.name} role={employee.role} updateEmployee={updateEmployee}/>
          return(
            <Employee 
              key={employee.id} 
              id={employee.id}
              name={employee.name} 
              role={employee.role} 
              image={employee.image}
              editEmployee={editEmployee}
            />
          );
        })}
      </div>
      <AddEmployee/>
    </div>
  );
}

export default Employees;
