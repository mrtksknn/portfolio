import React from 'react'
import skills from '../../Datas/skills'
import frontend from '../../Datas/frontend'
import backend from '../../Datas/backend'
import design from '../../Datas/design'

const SkillList = ({title}) => {
  return (
    <div className='flex flex-col ml-32 lg:ml-0'>
      <span className='text-white tracking-widest uppercase text-xs mb-5 mt-5 sm:mt-0'>
        {title}
      </span>
      <div className='grid grid-cols-1 gap-1 text-lg'>
        {
          title === 'skills' ?
          <div>
            {skills.map((item) => (
              <span key={item.id}>
                {item.title}
                <br />
              </span>
            ))}
          </div>
          :
          title === 'frontend' ?
          <div>
            {frontend.map((item) => (
              <span key={item.id}>
                {item.title}
                <br />
              </span>
            ))}
          </div>
          :
          title === 'backend' ?
          <div>
            {backend.map((item) => (
              <span key={item.id}>
                {item.title}
                <br />
              </span>
            ))}
          </div>
          :
          <div>
            {design.map((item) => (
              <span key={item.id}>
                {item.title}
                <br />
              </span>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default SkillList