import React from 'react'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  
  const data = [
    {
      id: 1,
      icon: {FaAward},
      header: 'Experience',
      detail: '3+ Years Working'
    },
    {
      id: 2,
      icon: {FiUsers},
      header: 'Experience',
      detail: '3+ Years Working'
    },
    {
      id: 3,
      icon: {VscFolderLibrary},
      header: 'Experience',
      detail: '3+ Years Working'
    }
  ];

  return (
    <section id='about'>
      <div className="container flex flex-col md:flex-row items-center mx-auto py-20 w-2/3">
        <div className="flex flex-col lg:flex-grow items-center md:items-start text-center md:text-left md:w-1/2 lg:pr-24 md:pr-16 mb-16 md:mb-0">
          <h1 className="text-white text-3xl sm:text-4xl title-font font-medium mb-4">
            Hi, I'm Mert.
          </h1>
          <p className="leading-relaxed mb-8">
            I'm a Front End Developer. I love to build amazing apps.
            I describe myself as a passionate developer who loves coding, open source,
            and the web platform. Aside from my job, I like to create and contribute
            to open source projects, and try my own projects. That helps me to learn a ton of new stuff, grow as
            a developer and support other open source projects. Also I enjoy reading technical
            things and new updates. In my free time you can find me at the gym 🏋️‍♂️, playing video games 
            and watching popular series.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="text-white text-lg inline-flex bg-green-500 hover:bg-green-600 focus:outline-none border-0 rounded py-2 px-6">
              Work With Me
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white inline-flex text-lg bg-gray-800 hover:bg-gray-700 focus:outline-none border-0 rounded ml-4 py-2 px-6">
              See My Works
            </a>
          </div>
        </div>
        <div className="lg:w-full lg:max-w-lg md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
          <div className='cards mt-10'>
            {data.map((data) => (
              <article className='flex flex-col items-center rounded-lg border' key={data.id}>
                {data.id === 1 ? <FaAward className='about__icon' /> : data.id === 2 ? <FiUsers className='about__icon' /> : <VscFolderLibrary className='about__icon' /> }
                <h5>{data.header}</h5>
                <small>{data.detail}</small>
              </article>
            ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default About