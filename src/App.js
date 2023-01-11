import React from 'react';
import Navbar from './Navbar.jsx';
import Houses from './Houses.jsx';
import Characters from './Characters.jsx';
import './App.css';
import { Routes, Route } from "react-router-dom";



function App() {
  return(
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/houses/:houseInfo" element={<Houses  />} />
      </Routes>
    </div>
  )

}


export default App;