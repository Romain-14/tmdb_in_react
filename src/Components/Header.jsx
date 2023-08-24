import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <h1>ze bingewatcher</h1>
        <nav>
            <NavLink to={"/"}>home</NavLink>
            <NavLink to={"search"}>search</NavLink>
        </nav>
    </header>
  )
}

export default Header