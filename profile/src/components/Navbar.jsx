import React from 'react'
import { NavLink } from 'react-router-dom'
import { letter } from '../assets/images'


const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to={'/'}>
            <img src={letter} alt="" className='w-12 h-12 rounded-xl object-contain'/>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({isActive}) => isActive ? "text-blue-700" : "text-black"}>About</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? "text-blue-700" : "text-black"}>Projects</NavLink>
        </nav>
       
    </header>
  )
}

export default Navbar