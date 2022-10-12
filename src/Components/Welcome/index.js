import React from 'react'
import Navbar from '../Navbar';

const Welcome = () => {
  return (
    <div className="parallax h-screen">
      <div className='flex flex-col backdrop-blur-sm flex items-center justify-between text-6xl h-full w-full'>
        <Navbar />
        <div className="text-white font-semibold text-center w-1/3">
          HI!
          <br />
          I'm React, UI, & Frontend Developer
        </div>
        <br />
      </div>
    </div>
  )
}

export default Welcome