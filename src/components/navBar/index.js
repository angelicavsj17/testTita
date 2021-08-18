import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="container--navBar">
            <NavLink to="/">Salir</NavLink>
            <NavLink to="/"></NavLink>
        </div>
    )
}

export default NavBar
