import React from 'react'

const Navbar = () => (
  <header>
    <div className="md:container flex flex-row justify-between md:flex-row mx-auto py-5 w-2/3">
      <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0">
        <span className="text-2xl">
          Mert Keskin
        </span>
      </a>
      <nav>
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
    </header>
)

export default Navbar