import React from 'react'
import HeroBG from '../../assets/Herobg.png'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (

        <>
            <div className='flex flex-col lg:flex-row h-screen items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32'>

                <div className='flex flex-col gap-2 w-1/2'>

                    <div className='text-4xl font-bold text-[#00AEEF]'>
                        Discover the <span className='text-[#1D4CA1]'>Topstack</span> <br /> Difference
                    </div>

                    <div className='text-lg font-medium'>Learn Smart & Earn Smarter</div>

                    <Link
                        href='#'
                        className='px-6 py-2 text-white rounded-full bg-gradient-to-tr from-[#00AEEF] to-[#1D4CA1] inline-block w-max h-max'
                    >
                        Get Started
                    </Link>

                </div>


                <img src={HeroBG} alt='' className='w-[40%]' />


            </div>

        </>

    )
}

export default HeroSection