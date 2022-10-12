import React from 'react'
import Navbar from '../Navbar';

const Welcome = () => {
  return (
    <div className="parallax h-screen">
      <div className='flex flex-col backdrop-blur-sm flex h-full w-full'>
        <Navbar />
        <div className="text-4xl xl:text-6xl sm:text-5xl xs:text-5xl text-white font-semibold text-center  mt-60 xl:mt-70 sm:mt-60 w-auto">
          HI!
          <br />
          I'm React, UI,
          <br />
          &
          <br />
          Frontend Developer
        </div>
        <br />
      </div>
    </div>
  )
}

export default Welcome