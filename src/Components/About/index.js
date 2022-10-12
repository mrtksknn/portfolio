import React from 'react'

const About = () => {
  return (
    <section id='about' className='bg-gray-100 py-10'>
      <div className="container flex flex-col md:flex-row items-center mx-auto py-20">
        <div className="flex flex-col lg:flex-grow items-center md:items-start text-center md:text-left lg:pr-24 md:pr-16 mb-16 md:mb-0">
          <div className='flex items-baseline mb-3'>
            <div className='border-b border-red-500 border-2 mr-3 w-4'/>
            <span className='text-sm font-semibold tracking-widest'>
              ABOUT
            </span>
          </div>
          <p className="leading-relaxed text-3xl text-slate-800 mb-3 w-5/6">
            Hi! I`m Mert, a frontend and react developer based in the Ankara area.
            I enjoy and love creating modern and functional online amazing experiences.
          </p>
          <div className='flex'>
            <a
              href="https://github.com/mrtksknn"
              className="flex items-center text-xs uppercase mr-5 hover:text-red-500 pb-2"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/keskin-mert/"
              className="flex items-center text-xs uppercase hover:text-red-500 pb-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About