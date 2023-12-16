import React from 'react'
import { Link } from 'react-router-dom'

const TestimonialComponent = () => {

  return (
    <div className="rounded-lg p-6 bg-white box-shadow-custom border-[2px] border-[#D9D9D9] w-full h-full">

      <div className="font-bold tracking-tight text-black">Rohit Kumar Pandit</div>

      <div className="mb-5 text-xs font-bold tracking-tight text-[#909294]">Webapp Developer</div>

      <div className="mb-5 text-sm md:text-base text-black"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..</div>

      <div className="text-right text-[12px] font-bold tracking-tight text-[#909294]"> 20 June 2023</div>

    </div>
  )

}

const Testimonial = () => {

  return (

    <div className="h-max items-center justify-around p-5 md:p-16 lg:p-24 xl:p-32 service-bg bg-no-repeat bg-center flex flex-col gap-10 lg:gap-16">

      <div className='text-3xl md:text-4xl font-bold text-center'>Don't Take Just Our Word</div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 w-full'>

        <TestimonialComponent />
        <TestimonialComponent />
        <TestimonialComponent />
        <TestimonialComponent />
        <TestimonialComponent />
        <TestimonialComponent />

      </div>

    </div>
  )
}

export default Testimonial
