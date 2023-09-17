import React from 'react'
import AboutImg from '../../assets/About.png'

const AboutSection = () => {
    return (
        <>

            <div className="flex flex-col lg:flex-row h-screen items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 about-bg bg-auto bg-no-repeat bg-center">

                <img src={AboutImg} alt="" className='w-[30%]' />

                <div className='w-[50%] flex flex-col gap-5'>

                    <div className='text-3xl font-bold'>About Us</div>

                    <p>Founded in August, 2017 Topstack is group of vibrant inquisitive mind
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