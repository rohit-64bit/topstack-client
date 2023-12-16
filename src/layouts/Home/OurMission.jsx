import React from 'react'

const OurMission = () => {

  return (
    <div className="flex flex-col lg:h-screen items-center gap-10 lg:gap-24 justify-around p-5 md:p-16 lg:p-24 xl:p-32 service-bg bg-no-repeat bg-center">

      <div className='text-3xl md:text-4xl font-bold text-center'>Our Mission</div>

      <div className='text-center lg:w-[80%] text-sm md:text-lg' >
        To provide quality software products with emerging tools and technologies to satisfy client's need and deliver product in time with competitive price and provide first hand industry exposure to the students.
        To become a leading product developing and training company in the field of Information & Technology in tomorrow's market.
      </div>

      <div className='p-10 md:p-20 w-full h-max bg-white rounded-xl box-shadow-custom border-[2px] border-[#D9D9D9] flex flex-col md:flex-row gap-4 items-center justify-around'>

        <div className="flex flex-col item-center md:gap-2 w-max h-max m-auto">

          <div className='font-semibold text-2xl lg:text-4xl m-auto'>
            10+
          </div>
          <div className=" lg:text-lg text-[#808285] text-center">
            Number of Industrial training
          </div>

        </div>

        <div className="flex flex-col item-center md:gap-2 w-max h-max m-auto">

          <div className='font-semibold text-2xl lg:text-4xl m-auto'>
            100+
          </div>
          <div className=" lg:text-lg text-[#808285] text-center">
            Inovative IT Solutions
          </div>

        </div>

        <div className="flex flex-col item-center md:gap-2 w-max h-max m-auto">

          <div className='font-semibold text-2xl lg:text-4xl m-auto'>
            178+
          </div>
          <div className=" lg:text-lg text-[#808285] text-center">
            Number of Academic Projects
          </div>

        </div>

      </div>

    </div>
  )
}

export default OurMission
