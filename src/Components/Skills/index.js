import React from 'react'
import skills from '../../constant/skills'
import technology from '../../constant/technology'

const Skills = () => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-20">
      <div className='flex flex-col'>
        <span className='text-white tracking-widest text-xs mb-5'>
          SKILLS
        </span>
          <div className='grid grid-cols-1 gap-1 text-lg'>
            {skills.map((skill) => (
              <span key={skill.id}>
                {skill.title}
                <br />
              </span>
            ))}
          </div>
      </div>
      <div className='flex flex-col'>
        <span className='text-white tracking-widest text-xs mb-5'>
          TECHNOLOGY
        </span>
          <div className='grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 text-lg'>
            {technology.map((tech) => (
              <span key={tech.id}>
                {tech.title}
                <br />
              </span>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Skills