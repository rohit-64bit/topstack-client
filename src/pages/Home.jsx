import React from 'react'
import HeroSection from '../layouts/Home/HeroSection';
import AboutSection from '../layouts/Home/AboutSection';
import ServicesSection from '../layouts/Home/ServicesSection';
import OurMission from '../layouts/Home/OurMission';
import DoNotTake from '../layouts/Home/DoNotTake';
import CareersWithTopstack from '../layouts/Home/CareersWithTopstack';
import ContactForm from '../layouts/Home/ContactForm';
import FooterSection from '../layouts/Home/FooterSection';
import SuccesStory from '../layouts/Home/SuccesStory';
const Home = () => {
  return (
    <>

      <div className='flex flex-col h-max'>

        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <OurMission />
        <DoNotTake />
        <CareersWithTopstack/>
        <SuccesStory/>
        <ContactForm />
        <FooterSection />
      </div>

    </>
  )
}

export default Home;