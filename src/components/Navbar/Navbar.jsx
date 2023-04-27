<<<<<<< HEAD
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {

    
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const removeNavbar = () => {
    setShowNavbar(false);
  };

  const navbarClass = `navbar-custom-style ${showNavbar ? "navbar-show" : ""}`;

  
  

  return (
    <section id="navbarCustom">
      <i class="bx bx-menu text-3xl text-black" onClick={toggleNavbar}></i>
      <nav className={navbarClass}>
        <i class="bx bx-x text-3xl text-black" onClick={removeNavbar}></i>

        <ul className="ul-position">
          <li>
            <a
              className="text-xl md:text-4xl lg:text-5xl xl:text-3xl 2xl:text-8xl text-uppercase"
              href="/"
            >
              Home
            </a>
          </li>
          <hr className="hr-navbar" />
          <li>
            <a
              className="text-xl md:text-4xl lg:text-5xl xl:text-3xl 2xl:text-8xl text-uppercase"
              href="/appointment"
            >
              APPOINTMENT
            </a>
          </li>
          <hr className="hr-navbar" />
          <li>
            <a
              className="text-xl md:text-4xl lg:text-5xl xl:text-3xl 2xl:text-8xl text-uppercase"
              href="/experts"
            >
              Experts
            </a>
          </li>
          <hr className="hr-navbar" />
          <li>
            <a
              className="text-xl md:text-4xl lg:text-5xl xl:text-3xl 2xl:text-8xl text-uppercase"
              href="/about"
            >
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
=======
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
                    <a className='text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-uppercase' href="/">Home</a>
                </li>
                <hr className='hr-navbar' />
                <li>
                    <a className='text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-uppercase' href="">Projects</a>
                </li>
                <hr className='hr-navbar' />
                <li>
                    <a className='text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-uppercase' href="/experts">Experts</a>
                </li>
                <hr className='hr-navbar' />
                <li>
                    <a className='text-xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-uppercase' href="">About Us</a>
                </li>
               
            </ul>
        </nav>
    </section>
  )
}

export default Navbar
>>>>>>> 3acbac4da4f4cfdf65b88f17619fa7f8e1f65a23
