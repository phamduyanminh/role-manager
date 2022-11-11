import React from 'react';
import { useState } from 'react';

import './App.css';
import Employee from './components/Employees';

function App() {
  const imgURL = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  const[employees, setEmployees] = useState([
    {
      name: "Minh",
      role: "intern",
      image: imgURL
    },
    {
      name: "Minh2",
      role: "intern",
      image: imgURL
    },
    {
      name: "Minh3",
      role: "intern",
      image: imgURL
    },
  ]);

  return (
    <div>
      <input type="text"/>
      <div className="flex flex-wrap justify-center">
        {employees.map((employee) => {
          return(
            <Employee key={employee.name} name={employee.name} role={employee.role} image={employee.image}/>
          );
        })}
      </div>
    </div>
  );
}

export default App;
