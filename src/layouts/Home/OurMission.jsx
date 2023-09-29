import React from 'react'

const OurMission = () => {
  return (
    <div className=" h-screen items-center justify-between px-4 sm:px-8 md:px-16
     lg:px-24 xl:px-32 about-bg bg-auto bg-no-repeat bg-center">

      <div className='text-3xl font-bold text-center my-20'>OUR MISSION</div>
       <p className='text-center' >
              To provide quality software products with emerging tools and
              technologies to satisfy client's need and deliver product in time
              with</p>
             <p className='text-center'>competitive price and provide first hand industry exposure to
              the students.
            </p>
            <p className="text-center ">{`To become a leading product developing and training company in the field of Information & Technology in tomorrow's market.`}</p>
            <div className='shadow-lg my-20 p-[90px] bg-slate-100 border-[1px] rounded-[20px] my-30 '>
            <div className=' mb-5 text-[50px] to-black items-center flex justify-between'>
            10+
            <div>    
              100+
            </div>
            <div>
              178+
            </div>
          </div>
          <div className=" text-[20px] to-black flex items-center gap-[150px]">
            Number of Industryal training
          
          <div className="">
            Innovative IT Solutions
          </div>
          <div className="">
            Numbers of Academic Projects
          </div>
          </div>
            </div>
    </div>
  )
}

export default OurMission
