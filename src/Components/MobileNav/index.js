import React, { useState } from 'react'
import {AiOutlineUser} from 'react-icons/ai';
import {RiContactsBook2Line} from 'react-icons/ri';
import {MdWorkOutline, MdDesignServices, MdOutlineLibraryBooks} from 'react-icons/md';

const MobileNav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className='mobile-nav lg:hidden'>
      <a href="#about" 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a href="#work" 
        onClick={() => setActiveNav('#work')} 
        className={activeNav === '#work' ? 'active' : ''}
      >
        <MdWorkOutline />
      </a>
      <a href="#services" 
        onClick={() => setActiveNav('#services')} 
        className={activeNav === '#services' ? 'active' : ''}
      >
        <MdDesignServices />
      </a>
      <a href="#experience" 
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <MdOutlineLibraryBooks />
      </a>
      <a href="#contact" 
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <RiContactsBook2Line />
      </a>
    </nav>
  )
}

export default MobileNav