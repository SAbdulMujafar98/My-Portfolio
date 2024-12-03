import React from 'react'
import "./mobileNav.css"
import { Link } from 'react-router-dom'

const MobileNav = ({ isOpen , toggleMenu }) => {
  return (
    <>
        <div
         className={`mobile-menu ${isOpen ? "active" : ""}`}
         onClick={toggleMenu}>

            <div className="mobile-menu-container">
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
            </div>
            
         </div>
    </>
  )
}

export default MobileNav