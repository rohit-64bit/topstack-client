import React from 'react'
import Logo from '../../assets/logo.svg';
import { AiOutlineCloudUpload } from "react-icons/ai";

const CareersWithTopstack = () => {
  return (

    <div id='careers' className=" items-center justify-between p-5 md:p-16 lg:p-24 xl:p-32 service-bg bg-no-repeat bg-center flex flex-col gap-10 lg:gap-24">

      <div className='text-3xl md:text-4xl font-bold text-center'>Careers With Topstack</div>

      <div className='box-shadow-custom h-full w-full bg-white flex flex-col md:flex-row rounded-xl overflow-hidden'>

        <div className='md:w-[45%] bg-[#ECF7FB] flex flex-col gap-4 p-8 lg:p-12'>

          <img src={Logo} alt="" className='w-32 md:w-40' />

          <div className='font-bold text-sm md:text-base'>Join the Topstack team</div>

          <div className='text-sm md:text-base'>
            At TopStack, we're on the hunt for talented individuals like you to become part of our dynamic team. Your career journey with us promises innovation, growth, and a supportive community. Ready to take the next step? Explore our current job openings, fill out the form below, and let your professional adventure begin. Your skills, your future, and your aspirations - we value them all. Rest assured, your information is kept secure as we're committed to strict privacy policies. We're excited to learn more about you and how you can contribute to our mission. Welcome to your future at TopStack!
          </div>

        </div>

        <form className='md:w-[55%] flex flex-col p-8 lg:p-12 justify-between gap-2'>

          <input type="text" className='py-2 px-5 w-full outline outline-2 outline-[#D9D9D9] rounded-md focus:outline-[#1D4CA1] transition-all duration-300 ease-in-out text-base md:text-lg' placeholder='Full Name' />

          <input type="text" className='py-2 px-5 w-full outline outline-2 outline-[#D9D9D9] rounded-md focus:outline-[#1D4CA1] transition-all duration-300 ease-in-out text-base md:text-lg' placeholder='Email Address' />

          <input type="text" className='py-2 px-5 w-full outline outline-2 outline-[#D9D9D9] rounded-md focus:outline-[#1D4CA1] transition-all duration-300 ease-in-out text-base md:text-lg' placeholder='Contact No' />

          <input type="text" className='py-2 px-5 w-full outline outline-2 outline-[#D9D9D9] rounded-md focus:outline-[#1D4CA1] transition-all duration-300 ease-in-out text-base md:text-lg' placeholder='Experience' />

          <label htmlFor="dropzone-file" className="py-2 px-5 w-full outline outline-2 outline-[#D9D9D9] rounded-md focus:outline-[#1D4CA1] transition-all duration-300 ease-in-out text-base md:text-lg" >

            <input id="dropzone-file" type="file" accept='.pdf' className="hidden" />

            <div className="relative rounded-full select-none flex flex-col gap-5">

              <div className="flex flex-col py-5 rounded-2xl">
                <AiOutlineCloudUpload className='m-auto text-[#B5B5B5]' fontSize={40} />
                <p className="m-auto text-[#B5B5B5] text-center text-xs md:text-base">Upload CV click here to browse files.</p>
              </div>

            </div>

          </label>

          <div className='flex h-max gap-2 select-none items-start text-xs '>

            <input type="checkbox" name="" id="check" className='transition-all duration-300 ease-in-out text-lg cursor-pointer mt-1' />

            <label htmlFor="check">I acknowledge that my information may be used for TopStack's services, and I agree to TopStack's Privacy Policy.</label>

          </div>

          <button className='py-2 w-full text-center outline outline-[2px] outline-[#D9D9D9] rounded-md hover:bg-gradient-to-r from-[#1D4CA1] to-[#00AEEF] hover:outline-[#1D4CA1] hover:text-white transition-all duration-300 ease-in-out text-base md:text-lg mt-2'>
            SUBMIT
          </button>

        </form>

      </div>

    </div>

  )
}


export default CareersWithTopstack
