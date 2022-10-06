import React from 'react'
import { projects } from './data';

const Projects = () => (
  <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container text-center py-10 mx-auto w-2/3">
        <div className="flex flex-col w-full mb-20">
          <h1 className="text-white text-3xl sm:text-4xl font-medium title-font mb-4">
            Works I've Built
          </h1>
          <p className="leading-relaxed text-base lg:w-2/3 mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute object-cover object-center inset-0 w-full h-full"
                  src={project.image}
                />
                <div className="relative border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 w-full z-10 px-8 py-10">
                  <h2 className="tracking-widest text-sm text-green-400 title-font font-medium mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg text-white font-medium mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
)

export default Projects