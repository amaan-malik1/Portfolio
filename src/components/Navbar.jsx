import React from 'react'
import { NavLink } from 'react-router-dom'
import navIcon1 from './assets/navIcon1.svg'
import navIcon2 from './assets/navIcon2.svg'
import navIcon3 from './assets/navIcon3.svg'
import './Nav.css';

const Navbar = () => {
    return (
        <div>
            <nav className='nav-container'>
                <div className='logo'>Amaan</div>
                <ul className='list-container'>
                    <li>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/skills'} className={({ isActive }) => isActive ? "active-link" : ""}>Skills</NavLink>

                    </li>
                    <li>
                        <NavLink to={'/projects'} className={({ isActive }) => isActive ? "active-link" : ""}>Projects</NavLink>
                    </li>
                </ul>

                <div className="social-link">
                    <NavLink target='_blank' className='Navlink' to={'https://www.instagram.com/amaan__.malik/'}>
                        <img className='img' src={navIcon1} alt="Insta svg" />
                    </NavLink>

                    <NavLink target='_blank' className='Navlink' to={'https://www.linkedin.com/in/amaan-malik-36753527b/'}>
                        <img className='img' src={navIcon2} alt="Insta svg" />
                    </NavLink>

                    <NavLink className='Navlink' to={'https://github.com/amaan-malik1'}>
                        <img target='_blank' className='img' src={navIcon3} alt="Insta svg" />
                    </NavLink>

                    <button className='nav-btn'>Let's Connects</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
