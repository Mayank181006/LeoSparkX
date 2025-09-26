import Features from '@/components/sections/Features'
import {Hero} from '@/components/sections/Hero'
import ResponsiveNavbar from '@/components/shared/Navbar'
import HowItWorks from '@/components/sections/HowItWorks'
import FeaturesMarquee from '@/components/sections/FeaturesMarquee'
import React from 'react'
import FooterCTA from '@/components/shared/FooterCTA'
import Mobile from '@/components/sections/Mobile'
import Loader from '@/components/shared/Loader'

const page = () => {
  return (
    <div className='relative z-0 h-fit bg-white dark:bg-black '>
      <Loader />
      <ResponsiveNavbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FeaturesMarquee />
      <Mobile />
      <FooterCTA />
    </div>
  )
}

export default page