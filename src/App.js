import React from 'react';
import Navbar from './Navbar.jsx';
import Houses from './Houses.jsx';
import Characters from './Characters.jsx';
import './App.css';
import { Routes, Route } from "react-router-dom";
// import { useEffect, useState } from 'react'
// import Body from './Body.jsx';


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

// function App2() {
//   const [characters, setCharacters] = useState([])
//   const [character, setCharacter] = useState({})
//   let [modalToggle, setModalToggle] = useState(false)

//   useEffect(() => {
//     apiCall()
//   }, [])

//   function apiCall() {
//     fetch("https://hp-api.onrender.com/api/characters/")
//     .then((res) => res.json())
//     .then((data) => setCharacters(data))
//   }
//   function display() {
//     setModalToggle(prev => !prev)
//   }
//   function handleClick(charInfo) {
//     setCharacter(charInfo)
//     display()
//   }
//   return (
//     <div className="Body">
//       <Body />
//       <div className="characters-list">
//         {characters.map((character, index) => (
//           <div className="character-container" onClick={() => handleClick(character)} key={index}>
//             <img src={character.image} alt={character.name}/>
//             <h3>{character.name}</h3>
//           </div>
//         ))}
//       </div>
//       {modalToggle ?
//         <div className="modal">
//           <div className="modal-content">
//             <p>Name - {character.name}</p>
//             <p>House - {character.house}</p>
//             <p>Eye Color - {character.eyeColour}</p>
//             <p>Hair Color - {character.hairColour}</p>
//             <p>Ancestry - {character.ancestry}</p>
//             <button onClick={display}>Return</button>
//           </div>
//         </div>
//         :
//         null
//       }
//     </div>
//   );
// }


export default App;