import React from 'react'
import SkillList from './SkillList'

const Skills = () => {
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 lg:text-start lg:grid-cols-4 lg:gap-4 mt-10 md:mt-20 w-full">
      <SkillList title="skills" />
      <SkillList title="frontend" />
      <SkillList title="backend" />
      <SkillList title="design" />
    </div>
  )
}

export default Skills