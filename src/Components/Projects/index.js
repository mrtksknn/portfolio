import React from 'react'
import projects from '../../Datas/projects';

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
                  <div className="flex flex-col items-center justify-center relative bg-red-500 opacity-0 hover:opacity-90 px-5 z-10 w-full h-full">
                    <span className="title-font font-medium text-base text-white leading-7 border-4 py-1.5 px-4 mb-3">
                      {project.title}
                    </span>
                    <ul className='flex flex-row justify-around w-2/3'>
                      {project.subtitle.map((item, index) => {
                          return <li key={index} className="tracking-widest text-sm text-white">
                          {item}
                        </li>
                      })}
                    </ul>
                    <div className='flex justify-center px-10 mt-3 w-full'>
                      <a className='flex items-center justify-center text-white hover:bg-red-700 rounded mx-3 py-1 px-3 max-w-8' href={project.source}>
                        Source
                      </a>
                      <a className='flex items-center justify-center text-white hover:bg-red-700 rounded mx-3 py-1 px-3 max-w-8' href={project.live}>
                        View
                      </a>
                    </div>
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