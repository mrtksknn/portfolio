import React from 'react'
import experience from '../../constant/experiences'
import Skills from '../Skills'

const Experience = () => {
  return (
    <section id='experience' className='bg-black py-24'>
      <div className='container flex flex-col mx-auto'>
        <div className='flex items-baseline mb-3'>
          <div className='border-b border-red-500 border-2 mr-3 w-4'/>
          <span className='text-sm font-medium tracking-widest'>
            WORK EXPERIENCE
          </span>
        </div>
        <p className="leading-relaxed text-3xl text-slate-800 text-white mb-3 w-5/6">
          With more than 5 years of experience,
          I`ve had the pleasure of working with some great organizations
          and brilliant people from different sector and projects.
        </p>
        <table className="table-auto mt-10">
          <tbody>
            {
              experience.map((exp) => (
                <tr className='border-b border-slate-800 hover:bg-slate-900'>
                  <td className='text-xl p-4 text-white'>{exp.date}</td>
                  <td className='text-xl text-white'>
                    {exp.title}
                    <span className='font-semibold ml-2'>
                      {exp.company}
                    </span>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Skills />
      </div>
    </section>
  )
}

export default Experience