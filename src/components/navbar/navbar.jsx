import React, { useState } from 'react'
import './navbar.css'
import MobileNav from './mobileNav/mobileNav';
import { Link } from 'react-router-dom';

 const Navbar = () => {

    const[openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu)
    };

  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <img className='logo' src='./assets/images/logo.png' alt='logo' />

                <ul>
                    <Link to='/'>
                    <li>
                        <p className='menu-item'>Home</p>
                    </li>
                    </Link>
                    <Link to='/Skills'>
                    <li>
                        <p className='menu-item'>Skills</p>
                    </li>
                    </Link>
                    <Link to='/Education'>
                    <li>
                        <p className='menu-item'>Education</p>
                    </li>
                    </Link>
                    <Link to='/Projects'>
                    <li>
                        <p className='menu-item'>Projects</p>
                    </li>
                    </Link>
                    <Link to='/Contact Me'>
                    <li>
                        <p className='menu-item'>Contact Me</p>
                    </li>
                    </Link>

                    <button className='contact-btn' onClick={() => {}}>
                        Hire Me
                    </button>
                </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span 
                        className="material-symbols-outlined"
                        style={{fontSize:"1.8rem"}}>

                           {openMenu ? "close" : "menu"}

                        </span>
                    </button>
            </div>
        </nav>
    </>
  )
}
 export default Navbar;
