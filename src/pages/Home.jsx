import React from 'react'
import HeroSection from '../layouts/Home/HeroSection';
import AboutSection from '../layouts/Home/AboutSection';
import ServicesSection from '../layouts/Home/ServicesSection';

const Home = () => {
  return (
    <>

      <div className='flex flex-col h-max'>

        <HeroSection />
        <AboutSection />
        <ServicesSection />

      </div>

    </>
  )
}

export default Home;