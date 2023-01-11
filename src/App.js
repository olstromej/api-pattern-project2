import React from 'react';
import Navbar from './Navbar.jsx';
import Houses from './Houses.jsx';
import './App.css';
import { Routes, Route } from "react-router-dom";


function App() {
  return(
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2 className='link'>Click for House Info!</h2>} />
        <Route path="/houses/:houseInfo" element={<Houses  />} />
      </Routes>
    </div>
  )

}


// function APICall() {

// }

export default App;