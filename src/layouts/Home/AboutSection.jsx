import React from 'react'
import AboutImg from '../../assets/About.png'

const AboutSection = () => {
    return (
        <>

            <div className="flex flex-col-reverse gap-10 sm:gap-0 sm:flex-row h-screen items-center justify-around md:justify-between p-5 md:p-16 lg:p-24 xl:p-32 about-bg bg-no-repeat bg-center">

                <img src={AboutImg} alt="" className='sm:w-[30%] px-8 sm:px-0' />

                <div className='sm:w-[50%] flex flex-col gap-5'>

                    <div className='text-3xl md:text-4xl font-bold'>About Us</div>

                    <p className='text-sm md:text-base'>Founded in August, 2017 Topstack is group of vibrant inquisitive mind
                        ventured on the array of technical education and software development
                        to zero down the gap of academic education and industry needs. Our
                        integrated in-house software development and technical training
                        programme is perfect model fit to equip resources with latest
                        technology trends.
                    </p>

                </div>

            </div>

        </>
    )
}

export default AboutSection