import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const removeNavbar = () => {
        setShowNavbar(false);
    };
  
    const navbarClass = `navbar-custom-style ${showNavbar ? 'navbar-show' : ''}`;

  return (
    <section id='navbarCustom'>
        <i class='bx bx-menu text-3xl text-black' onClick={toggleNavbar} ></i>
        <nav className={navbarClass}>
            <i class='bx bx-x text-3xl text-black' onClick={removeNavbar}></i>

            <ul className='ul-position'>
                <li>
                    <a className='text-xl text-uppercase' href="/">Home</a>
                </li>
                <li>
                    <a className='text-xl text-uppercase' href="">Projects</a>
                </li>
                <li>
                    <a className='text-xl text-uppercase' href="/experts">Experts</a>
                </li>
                <li>
                    <a className='text-xl text-uppercase' href="">About Us</a>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default Navbar