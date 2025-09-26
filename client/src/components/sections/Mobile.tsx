import React from 'react'
import { StarsBackground } from '../shared/StarsBackground'
import { ShootingStars } from '../shared/ShootingStars'

const Mobile = () => {
  return (
    <div className='relative w-full h-[30vh] md:h-screen bg-white dark:bg-black overflow-hidden'>
        <StarsBackground />
        <ShootingStars />
        <img className='absolute object-contain w-full bottom-0 md:-bottom-10 left-1/2 -translate-x-1/2 h-fit md:h-[80vh]' src="mobile.png" alt="example" />
        
    </div>
  )
}

export default Mobile