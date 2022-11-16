import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Header from './pages/Header';
import Employees from './pages/Employees';
import Customers from './pages/Customers';


function App() {
  return (
    <div>
      <Header>
        <BrowserRouter>
          <Routes>
            <Route path='/Employees' element={<Employees/>}/>
            <Route path='/Customers' element={<Customers/>}/>
          </Routes>
        </BrowserRouter>
      </Header>
    </div>
  );
}

export default App;
