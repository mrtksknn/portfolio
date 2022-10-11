import React from 'react'

const Navbar = () => (
  <div className="container flex flex-row items-center justify-between md:flex-row mx-auto py-5 w-2/3">
    <a href="#about" className="flex title-font font-medium text-white mb-4 md:mb-0">
      <span className="text-2xl">
        Mert Keskin
      </span>
    </a>
    <nav className='flex'>
      <a href="#projects" className="hover:text-white text-xs uppercase px-5 mr-5">
        About
      </a>
      <a href="#skills" className="hover:text-white text-xs uppercase px-5 mr-5">
        Work
      </a>
      <a href="#testimonials" className="hover:text-white text-xs uppercase px-5 mr-5">
        Services
      </a>
      <a href="#projects" className="hover:text-white text-xs uppercase px-5 mr-5">
        Experience
      </a>
      <a href="#skills" className="hover:text-white text-xs uppercase pl-5 mr-5">
        Contact
      </a>
    </nav>
  </div>
)

export default Navbar