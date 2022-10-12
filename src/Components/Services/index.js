import React from 'react';
import services from '../../constant/services';
import { BsArrowsMove } from "react-icons/bs";
import { MdOutlineDesignServices } from 'react-icons/md';
import { RiEditBoxLine } from 'react-icons/ri';
import { FaUserFriends } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className='bg-gray-100 py-24'>
      <div className="container flex flex-col mx-auto">
        <div className='flex items-baseline mb-3'>
          <div className='border-b border-red-500 border-2 mr-3 w-4'/>
          <span className='text-sm font-medium tracking-widest'>
            SERVICES
          </span>
        </div>
        <p className="leading-relaxed text-3xl text-slate-800 mb-3 w-2/3">
          With a focus on design and art direction, I have
          experience in a variety of related specialties.
        </p>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {
            services.map((service) => (
              <div key={service.id} className='flex flex-col items-center bg-white rounded-lg px-10 py-12'>
                {
                  service.id === 1 ?
                  <MdOutlineDesignServices size={50} color="red" />
                  :
                  service.id === 2 ?
                  <BsArrowsMove size={50} color="red" />
                  :
                  service.id === 3 ?
                  <RiEditBoxLine size={50} color="red" />
                  :
                  service.id === 4 ?
                  <FaUserFriends size={50} color="red" />
                  : ''
                }
                <span className='text-base mt-5'>
                  {service.title}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services