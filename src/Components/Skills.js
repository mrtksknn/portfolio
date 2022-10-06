import React from 'react'
import { BiBadgeCheck } from 'react-icons/bi'
import { skills } from './data'

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
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="sm:w-1/2 w-full p-2">
              <div className="flex items-center bg-gray-800 rounded h-full p-4">
                <BiBadgeCheck className="text-green-400 flex-shrink-0 mr-4 w-6 h-6" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
)

export default Skills