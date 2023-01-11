import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Navbar() {
    return(
        <header>
        <h1>Harry Potter and It's Information</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/houses/Gryffindor">Gryffindor</Link>
            <Link to="/houses/Hufflepuff">Hufflepuff</Link>
            <Link to="/houses/Slytherin">Slytherin</Link>
            <Link to="/houses/Ravenclaw">Ravenclaw</Link>
        </nav>
        </header>
    )
}

export default Navbar;