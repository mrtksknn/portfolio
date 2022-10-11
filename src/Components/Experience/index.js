import React from 'react'

const Experience = () => {
  return (
    <section className='bg-black py-24'>
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
        <table class="table-auto">
          <tbody>
            <tr className='border-b border-slate-800'>
              <td className='text-xl p-4 text-white'>Dec. 2021 - Present</td>
              <td className='text-xl text-white'>
                Mid. Frontend Developer
                <span className='font-semibold ml-2'>
                  dAngel Fund
                </span>
              </td>
            </tr>
            <tr className='border-b border-slate-800'>
              <td className='text-xl p-4 text-white'>Sep. 2021 - Dec. 2021</td>
              <td className='text-xl text-white'>
                Junior Frontend Developer
                <span className='font-semibold ml-2'>
                  Microglobe
                </span>
              </td>
            </tr>
            <tr className='border-b border-slate-800'>
              <td className='text-xl p-4 text-white'>June 2021 - Sep. 2021</td>
              <td className='text-xl text-white'>
                Junior Frontend Developer
                <span className='font-semibold'>
                  Omega Bigdata
                </span>
              </td>
            </tr>
            <tr className='border-b border-slate-800'>
              <td className='text-xl p-4 text-white'>Aug. 2020 - Nov. 2020</td>
              <td className='text-xl text-white'>
                Volunteer Frontend Developer
                <span className='font-semibold ml-2'>
                  Weekiddo
                </span>
              </td>
            </tr>
            <tr className='border-b border-slate-800'>
              <td className='text-xl p-4 text-white'>July 2019 - Aug. 2019</td>
              <td className='text-xl text-white'>
                Frontend Developer Intern
                <span className='font-semibold ml-2'>
                  Jotform
                </span>
              </td>
            </tr>
            <tr className='border-b border-slate-800'>
              <td className='text-xl p-4 text-white'>Sep. 2018 - Dec. 2018</td>
              <td className='text-xl text-white'>
                Frontend Developer Intern
                <span className='font-semibold ml-2'>
                  Jotform
                </span>
              </td>
            </tr>
            <tr className='border-b border-slate-800'>
              <td className='text-xl p-4 text-white'>July 2017 - Aug. 2017</td>
              <td className='text-xl text-white'>
                Frontend Developer Intern
                <span className='font-semibold ml-2'>
                  Jotform
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="grid grid-cols-3 gap-3 mt-20">
          <div className='flex flex-col'>
            <span className='text-white tracking-widest text-xs mb-5'>
              SKILLS
            </span>
            <p className='text-lg'>
              Planing
              <br />
              Prototyping
              <br />
              Functionality
              <br />
              Visual Design
              <br />
              UI Development
              <br />
              Responsive Design
              <br />
              Creative Thinking
            </p>
          </div>
          <div className='flex flex-col'>
            <span className='text-white tracking-widest text-xs mb-5'>
              TECHNOLOGY
            </span>
            <p className='text-lg'>
              Git
              <br />
              React
              <br />
              Azure
              <br />
              Figma
              <br />
              Zeplin
              <br />
              Adobe XD
              <br />
              Bootstrap
              <br />
              HTML & CSS
              <br />
              Javascript
              <br />
              Material UI
              <br />
              Tailwind CSS
            </p>
          </div>
          <div />
        </div>
      </div>
    </section>
  )
}

export default Experience