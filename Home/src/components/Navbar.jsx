import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        <NavLink to={'/'} className={({isActive})=> isActive? "active-link" : ""}>Home</NavLink>
        <NavLink to={'/clothing'} className={({isActive})=> isActive? "active-link" : ""}>Clothing</NavLink>
        <NavLink to={'/cosmetics'} className={({isActive})=> isActive? "active-link" : ""}>Cosmetics</NavLink>
        <NavLink to={'/electronics'} className={({isActive})=> isActive? "active-link" : ""}>Electronics</NavLink>
    </nav>
  )
}

export default Navbar