import React, {useState, useEffect} from 'react';
import './App.css'

export default function Characters() {
    const [characters, setCharacters] = useState([])
    const [character, setCharacter] = useState({})
    let [modalToggle, setModalToggle] = useState(false)
  
    useEffect(() => {
      apiCall()
    }, [])
  
    function apiCall() {
      fetch("https://hp-api.onrender.com/api/characters/")
      .then((res) => res.json())
      .then((data) => setCharacters(data))
    }

    function display() {
      setModalToggle(prev => !prev)
    }

    function handleClick(charInfo) {
      setCharacter(charInfo)
      display()
    }

    return (
      <div className="Body">
        <div className="characters-list">
          {characters.slice(0, 25).map((character, index) => (
            <div className="character-container" onClick={() => handleClick(character)} key={index}>
              <img className="image" src={character.image} alt={character.name}/>
            </div>
          ))}
        </div>
        {modalToggle ?
          <div className="modal">
            <div className="modal-content">
              <p>Name - {character.name}</p>
              <p>House - {character.house}</p>
              <p>Eye Color - {character.eyeColour}</p>
              <p>Hair Color - {character.hairColour}</p>
              <p>Ancestry - {character.ancestry}</p>
              <button onClick={display}>Return</button>
            </div>
          </div>
          :
          null
        }
      </div>
    );
}
