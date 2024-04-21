import React from 'react'
import HeroSection from '../layouts/Home/HeroSection';
import AboutSection from '../layouts/Home/AboutSection';
import ServicesSection from '../layouts/Home/ServicesSection';
import OurMission from '../layouts/Home/OurMission';
import CareersWithTopstack from '../layouts/Home/CareersWithTopstack';
import ContactForm from '../layouts/Home/ContactForm';
import SuccesStory from '../layouts/Home/SuccesStory';
import Testimonial from '../layouts/Home/Testimonial';
const Home = () => {
  return (
    <>

      <div className='flex flex-col h-max scroll-smooth'>

        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <OurMission />
        <Testimonial />
        <CareersWithTopstack/>
        {/* <SuccesStory/> */}
        <ContactForm />

      </div>

    </>
  )
}

export default Home;