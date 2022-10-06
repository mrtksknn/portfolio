import React from 'react'

const Navbar = () => (
  <header className="bg-gray-800 md:sticky top-0 z-10">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0">
        <a href="#about" className="ml-3 text-xl">
          Mert Keskin
        </a>
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
        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
        Hire Me
      </a>
    </div>
    </header>
)

export default Navbar