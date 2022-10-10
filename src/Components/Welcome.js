import React from 'react'
import Navbar from '../Components/Navbar';

const Welcome = () => {
  return (
    <div>
      <div class="parallax flex flex-col items-center justify-center h-screen">
        <Navbar />
        <div className='backdrop-blur-sm flex items-center justify-center text-6xl h-full w-full'>
          <div className="text-white font-semibold text-center w-1/3">
            HI!
            <br />
            I'm React, UI, & Frontend Developer
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome