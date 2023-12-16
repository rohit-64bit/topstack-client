import React from 'react'
import HeroBG from '../../assets/Herobg.png'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (

        <>
            <div className='flex flex-col md:flex-row h-[87vh] lg:h-screen md:items-center md:justify-between p-5 md:p-16 lg:p-24 xl:p-32'>

                <div className='flex flex-col gap-2 w-max md:w-[60%] my-auto'>

                    <div className='text-3xl md:text-4xl font-bold text-[#00AEEF]'>
                        Discover the <span className='text-[#1D4CA1]'>Topstack</span> <br /> Difference
                    </div>

                    <div className='text-sm md:text-lg font-medium'>Learn Smart & Earn Smarter</div>

                    <Link
                        href='#'
                        className='px-4 py-1 md:px-6 md:py-2 text-white rounded-full bg-gradient-to-tr from-[#00AEEF] to-[#1D4CA1] inline-block w-max h-max'
                    >
                        Get Started
                    </Link>

                </div>


                <img src={HeroBG} alt='' className='w-0 md:w-[40%] hidden md:block' />


            </div>

        </>

    )
}

export default HeroSection