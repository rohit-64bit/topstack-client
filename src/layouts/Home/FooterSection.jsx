import React from 'react';
import Logo from '../../assets/logo.svg';

const FooterSection = () => {
  return (
    <footer className="bg-white text-black font-roboto">
      <div className="flex flex-col md:flex-row">
        {/* Left section with logo */}
        <div className="bg-aliceblue h-72 flex flex-col item-center w-full md:w-1/3">
          <img src={Logo} alt="" className=" w-40 h-auto " />
          <div className="text-sm mb-6">Learn Smart & Earn Smarter</div>
          {/* Contact section */}
      <div className=" ">
        <div className="text-20px">Contact</div>
        <div className="text-15px">Email: contact@topstack.in</div>
        <div className="text-15px">Phone: +91 0000000000</div>
      </div>
        </div>
      

        <div className="flex justify-between md:mx-10 py-4 px-6">
          <div className=" ">
            Navigation
            <ul className="  text-[10]px">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

          <div className="text-[15]px">
            Services
            <ul className="text-10px">
              <li>Industrial Training & Placement Support</li>
              <li>Academic Consultancy</li>
              <li>In-house Software Development</li>
            </ul>
          </div>
        </div>
      
      <div className="text-20px bg-gradient-to-r from-blue-600 to-blue-400 h-16 flex items-center justify-between text-white">
        Copyright © 2023 | Topstack
      </div>
    </footer>
  );
};

export default FooterSection;
