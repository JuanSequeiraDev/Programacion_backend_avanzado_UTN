import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <h2>brand name</h2>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/carrito'}>Carrito</NavLink>
            </nav>
        </header>
    )
}

export default Navbar