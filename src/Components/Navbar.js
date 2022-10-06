import React from 'react'

const Navbar = () => (
  <header className="bg-gray-800 md:sticky top-0 z-10">
    <div className="container flex flex-col md:flex-row flex-wrap items-center mx-auto py-5 w-2/3">
      <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0">
        <span className="text-xl">
          MERT KESKIN
        </span>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="#projects" className="mr-5 hover:text-white">
          Works
        </a>
        <a href="#skills" className="mr-5 hover:text-white">
          Skills
        </a>
        <a href="#testimonials" className="mr-5 hover:text-white">
          Testimonials
        </a>
      </nav>
      <a
        href="#contact"
        className="inline-flex items-center bg-gray-800 border-0 py-1 focus:outline-none hover:bg-gray-700 rounded text-base md:mt-0">
        Hire Me
      </a>
    </div>
    </header>
)

export default Navbar