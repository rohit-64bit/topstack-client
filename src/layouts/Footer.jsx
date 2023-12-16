import React from 'react';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { IoMailSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <>
      <footer className='bg-[#ECF7FB] flex flex-col'>

        <div className='flex flex-col md:flex-row justify-between p-8 md:p-16 lg:p-24 xl:p-32 gap-5'>

          <div>

            <div>
              <img src={Logo} alt="" className='lg:w-44 w-28' />
              <p className='text-xs mt-2 text-[#808285] lg:text-base'>Learn Smart & Earn Smarter</p>
            </div>

            <div className='mt-3'>

              <p className='text-[#808285] text-sm lg:text-lg'>
                contact@topstack.in
              </p>

              <p className='text-[#808285] text-sm lg:text-lg'>
                +91 0000000000
              </p>

            </div>

          </div>

          <div className='flex flex-col gap-2 md:gap-3'>

            <div className=' md:text-lg'>NAVIGATION</div>

            <Link to='/' className='text-[#808285] text-sm md:text-base'>Home</Link>
            <Link to='/' className='text-[#808285] text-sm md:text-base'>About Us</Link>
            <Link to='/' className='text-[#808285] text-sm md:text-base'>Services</Link>
            <Link to='/' className='text-[#808285] text-sm md:text-base'>Careers</Link>
            <Link to='/' className='text-[#808285] text-sm md:text-base'>Contact Us</Link>

          </div>

          <div className='flex flex-col gap-2 md:gap-3'>

            <div className=' md:text-lg'>SERVICES</div>

            <Link to='/' className='text-[#808285] text-sm md:text-base'>Industrial Training & Placement Support</Link>
            <Link to='/' className='text-[#808285] text-sm md:text-base'>Academic Consultancy</Link>
            <Link to='/' className='text-[#808285] text-sm md:text-base'>In House Software Development</Link>

          </div>

          <div className='text-sm lg:text-lg'>
            ELEVATE YOUR CAREER WITH<br />TOPSTACK WHERE TALENT<br />MEETS OPPURTUNITY.
          </div>

        </div>

        <div className='flex flex-col sm:flex-row w-full items-center justify-between px-5 py-5 md:px-16 lg:px-24 xl:px-32 gap-3 bg-gradient-to-tr from-[#1D4CA1] to-[#00AEEF] text-white text-sm font-thin'>

          <div className=''>
            Copyright © 2023 | Topstack
          </div>

          <div className='flex gap-3 items-center'>

            <a href="#">
              <AiFillFacebook fontSize={20} className='duration-300 hover:scale-150' />
            </a>

            <a href="#">
              <AiFillLinkedin fontSize={20} className='duration-300 hover:scale-150' />
            </a>

            <a href="#">
              <IoMailSharp fontSize={22} className='duration-300 hover:scale-150' />
            </a>

          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;
