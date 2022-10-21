import React from 'react'
import navItems from '../../Datas/navItem';

const Navbar = () => {
  return (
    <div className='flex justify-center'>
      <div className="container flex-row flex justify-between py-5 px-10 xl:px-0">
        <a href="#about" className="flex title-font font-medium text-white text-2xl mb-4 md:mb-0"
        >
          Mert Keskin
        </a>
        <div className='hidden md:flex'>
          {navItems.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.title}`}
              className="nav-items flex items-center text-xs uppercase px-5 xl:mr-5 hover:text-white py-2"
            >
              {nav.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar