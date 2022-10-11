import React from 'react'

const Navbar = () => (
  <div className="container flex flex-row items-center justify-between md:flex-row mx-auto py-5 w-2/3">
    <a href="#about" className="flex title-font font-medium text-white mb-4 md:mb-0">
      <span className="text-2xl">
        Mert Keskin
      </span>
    </a>
    <div className='flex'>
      <a href="#projects" className="nav-items flex items-center text-xs uppercase px-5 mr-5 hover:text-white pb-2">
        About
      </a>
      <a href="#skills" className="nav-items flex items-center text-xs uppercase px-5 mr-5 hover:text-white pb-2">
        Work
      </a>
      <a href="#testimonials" className="nav-items flex items-center text-xs uppercase px-5 mr-5 hover:text-white pb-2">
        Services
      </a>
      <a href="#projects" className="nav-items flex items-center text-xs uppercase px-5 mr-5 hover:text-white pb-2">
        Experience
      </a>
      <a href="#skills" className="nav-items flex items-center text-xs uppercase px-5 mr-5 hover:text-white pb-2">
        Contact
      </a>
    </div>
  </div>
)

export default Navbar