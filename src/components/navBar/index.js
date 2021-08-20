import React from 'react'
import { NavLink } from 'react-router-dom'
import '../navBar/navbar.css'
import imgU from '../../assets/cat.png'

const NavBar = () => {
    return (
        <div className="container--navBar">
<div className="container--data--user">
    <img src={imgU} className="img--user--header" />
<h1 className="text--data--user">Angelica sarmiento</h1>

</div>
        </div>
    )
}

export default NavBar
