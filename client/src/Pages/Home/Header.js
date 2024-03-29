import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Header() {
  return (
    <>
      <div>
        {/* Upper Header */}
        <div className="bg-orange-500 flex justify-between items-center md:px-10 p-2 h-16 ">
          <div className="w-full flex flex-col items-center gap-1 md:flex md:items-center md:flex-row md:gap-10 my-5">
            <div className="flex items-center  gap-2"> 
              <IoIosCall color="white"  size={24} />
              <a href="tel: +91 7032725111" className="text-white font-semibold text-md md:text-lg">+91 7032725111</a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope color="white" size={24}/>
              <a href="mailto:contact@charteredfilings.com" className="text-white font-semibold text-md md:text-lg">contact@charteredfilings.com</a>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center justify-center gap-5">
            <FaFacebook size={20} color="white"/>
            <FaTwitter size={20} color="white"/>
            <FaYoutube size={20} color="white"/>
            <FaInstagram size={20} color="white"/>
            <FaLinkedin size={20} color="white"/>
            </ul>
          </div>
        </div>
        {/* Lower Header */}
        <div className="flex items-center bg-white border-2 gap-14 py-1 ">
          <div>
          <img src="https://i.ibb.co/tPRTDRK/charteredfilings-logo.png" alt="charteredfilings-logo" border="0" className="w-24 min-w-32 md:w-32"/>
          </div>
          <div>
            <ul className="hidden  gap-4 font-semibold md:flex md:items-center md:flex-wrap ">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Start Business &#11206;</li>
              <li className="cursor-pointer">Registrations & Licenses &#11206;</li>
              <li className="cursor-pointer">Tradmark & IP &#11206;</li>
              <li className="cursor-pointer">Tax & Compliances &#11206;</li>
              <li className="cursor-pointer">Legal Services &#11206;</li>
              <li className="cursor-pointer">Gallery</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
