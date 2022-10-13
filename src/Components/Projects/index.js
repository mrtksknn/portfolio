import React from 'react'
import projects from '../../constant/projects';

const Projects = () => (
  <section id="work" className="text-gray-400 bg-white py-24 px-3 lg:px-0">
      <div className="container text-center py-10 mx-auto w-2/3">
        <div className='flex items-baseline mb-12'>
          <div className='border-b border-red-500 border-2 mr-3 w-4'/>
          <span className='text-sm font-semibold tracking-widest'>
            MY WORK
          </span>
        </div>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3">
          {
            projects.map((project) => (
              <div key={project.title} className='bg-gray-300'>
                <div className="card relative">
                  <img
                    alt={project.title}
                    className="absolute object-cover object-center inset-0 w-full h-full p-3"
                    src={project.image}
                  />
                  <div className="flex flex-col items-center justify-center relative bg-red-500 opacity-0 hover:opacity-90 w-full z-10 h-full">
                    <span className="title-font font-medium text-base text-white leading-7 border-4 py-1.5 px-4 mb-3">
                      {project.title}
                    </span>
                    <h2 className="tracking-widest text-sm text-white mb-1">
                      {project.subtitle}
                    </h2>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
)

export default Projects