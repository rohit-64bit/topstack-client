import React from 'react';
import Logo from '../../assets/logo.svg';
import { AiOutlineCloudUpload } from "react-icons/ai";

const ContactForm = () => {

  return (
    <>
      <div id='contact' className="h-max items-center p-5 md:p-16 lg:p-24 xl:p-32 py-20 service-bg bg-no-repeat bg-center flex flex-col gap-24">

        <div className='text-3xl md:text-4xl font-bold text-center'>Contact Us</div>

        <div className='box-shadow-custom h-max w-full bg-white flex flex-col md:flex-row rounded-xl overflow-hidden'>

          <form className='md:w-[55%] flex flex-col p-8 md:p-12 justify-between gap-2 h-max'>

            <input type="text" className='py-2 px-5 w-full outline outline-2 outline-[#D9D9D9] rounded-md focus:outline-[#1D4CA1] transition-all duration-300 ease-in-out text-base md:text-lg' placeholder='Full Name' />

            <input type="email" className='py-2 px-5 w-full outline outline-2 outline-[#D9D9D9] rounded-md focus:outline-[#1D4CA1] transition-all duration-300 ease-in-out text-base md:text-lg' placeholder='Email Address' />

            <input type="text" pattern='+[0-9]' className='py-2 px-5 w-full outline outline-2 outline-[#D9D9D9] rounded-md focus:outline-[#1D4CA1] transition-all duration-300 ease-in-out text-base md:text-lg' placeholder='Contact No' />

            <select name=""
              className='py-2 px-5 w-full outline outline-2 outline-[#D9D9D9] rounded-md focus:outline-[#1D4CA1] transition-all duration-300 ease-in-out text-base md:text-lg'
              id="contactReason"
              required
            >
              <option value="" disabled selected>Contacting For</option>
              <option value="inquiry">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
              <option value="aconsultation">Academic Consultation</option>
              <option value="sodevlopment">Software Development</option>
            </select>

            <textarea rows={7} type="text" className='py-2 px-5 w-full outline outline-2 outline-[#D9D9D9] rounded-md focus:outline-[#1D4CA1] transition-all duration-300 ease-in-out text-base md:text-lg' placeholder='Message' />

            <button type='submit' className='py-2 w-full text-center outline outline-[2px] outline-[#D9D9D9] rounded-md hover:bg-gradient-to-r from-[#1D4CA1] to-[#00AEEF] hover:outline-[#1D4CA1] hover:text-white transition-all duration-300 ease-in-out text-base md:text-lg mt-2'>
              SUBMIT
            </button>

          </form>

          <div className='md:w-[45%] bg-[#ECF7FB] hidden md:flex'>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58804.57635864505!2d88.34853350144463!3d22.902818805821823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f893dbd4300835%3A0xeaaf1f3b1143711d!2sChinsurah%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1696543284171!5m2!1sen!2sin" className='h-full w-full' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>

        </div>

      </div>
    </>
  );
};

export default ContactForm;
