import React from 'react'
import { BiBadgeCheck } from 'react-icons/bi'
import { frontSkills, backSkills, designSkills } from '../data'

const Skills = () => (
  <section id="skills">
      <div className="container mx-auto py-10 w-2/3">
        <div className="text-center mb-20">
          <h1 className="text-white text-3xl sm:text-4xl font-medium title-font mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-between sm:mx-auto sm:mb-2 -mx-2">
          <div className='bg-gray-800 rounded-xl w-full max-w-sm py-4'>
            <h1 className="text-white text-2xl font-medium title-font flex justify-center w-full mb-4">
              Design
            </h1>
            <div className='flex flex-col items-center w-full'>
              {designSkills.map((skill) => (
                <div key={skill} className="w-3/4 w-full">
                  <div className="flex items-center">
                    <BiBadgeCheck className="text-green-400 flex-shrink-0 mr-4 w-6 h-6" />
                    <span className="title-font font-medium text-white">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='bg-gray-800 rounded-xl w-full max-w-sm py-4'>
            <h1 className="text-white text-2xl font-medium title-font flex justify-center w-full mb-4">
              Frontend
            </h1>
            <div className='flex flex-col items-center w-full'>
              {frontSkills.map((skill) => (
                <div key={skill} className="w-3/4 w-full">
                  <div className="flex items-center">
                    <BiBadgeCheck className="text-green-400 flex-shrink-0 mr-4 w-6 h-6" />
                    <span className="title-font font-medium text-white">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='bg-gray-800 rounded-xl w-full max-w-sm py-4'>
            <h1 className="text-white text-2xl font-medium title-font flex justify-center w-full mb-4">
              Backend
            </h1>
            <div className='flex flex-col items-center w-full'>
              {backSkills.map((skill) => (
                <div key={skill} className="w-3/4 w-full">
                  <div className="flex items-center">
                    <BiBadgeCheck className="text-green-400 flex-shrink-0 mr-4 w-6 h-6" />
                    <span className="title-font font-medium text-white">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
)

export default Skills