import React from 'react'
import { useState } from 'react'
import '../Style/Header.css'
import header__logo from '../img/header__logo.jpg'
import Hamburger from 'hamburger-react'
import { NavLink } from 'react-router-dom'
function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header>
        <div className='container'>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <img src={header__logo} alt="" />
                </div>
                <nav className='header__list'>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/git">Git Hub</NavLink>
                        </li>
                        <li>
                            <NavLink to="/netlify">Netlify</NavLink>
                        </li>
                        <li>
                            <a href="!#">Links</a>
                        </li>
                    </ul>
                </nav>
                <div onClick={toggleMenu} className='header__hamburger'>
                    <Hamburger color='white'/>
                </div>
            </div>
            {isMenuOpen && (
            <ul className='header__list__mob'>
                     <li>
                            <a href="!#">Home</a>
                        </li>
                        <li>
                            <a href="!#">Git Hub</a>
                        </li>
                        <li>
                            <a href="!#">Netlify</a>
                        </li>
                        <li>
                            <a href="!#">Links</a>
                        </li>
                </ul>
            )}
        </div>
    </header>
  )
}

export default Header