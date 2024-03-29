import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
     <div className='bg-[#151C2A] pb-10 text-white px-2 md:px-20'>
      {/* first box */}
      <div className=' md:flex md:items-center justify-center gap-20 border-b-2 pb-7 border-white'>
        <div>
          <h2 className='pt-8 text-xl font-semibold'>Start A Business</h2> 
          <ul className='mt-4 flex flex-col gap-2 text-md font-medium cursor-pointer'>
            <li>&gt; Pvt Ltd Company Registration in Hyderabad</li>
            <li>&gt; Firm Registration in Hyderabad</li>
            <li>&gt; LLP Registration in Hyderabad</li>
            <li>&gt; One Person Company Registratioin in Hyderabad</li>
          </ul>
        </div>
        <div>
          <h2 className='pt-8 text-xl font-semibold'>Licenses</h2>
          <ul className='mt-4 flex flex-col gap-2 text-md font-medium cursor-pointer'>
            <li>&gt; FASSAI Registration in Hyderabad</li>
            <li>&gt; FSSAI Renewwl Consultant</li>
            <li>&gt; IEC Registration in Hyderabad</li>
            <li>&gt; DSC Registration in Hyderabad</li>
          </ul>
        </div>
        <div>
          <h2 className='pt-8 text-xl font-semibold'>Registration</h2>
          <ul className='mt-4 flex flex-col gap-2 text-md font-medium cursor-pointer'>
            <li>&gt;  Trademark Registration in Hyderabad</li>
            <li>&gt;  TM Objection</li>
            <li>&gt;  Trademark Renewel in Hyderabad</li>
            <li>&gt;  Copyright Registration in Hyderabad</li>
          </ul>
        </div>
        <div>
          <h2 className='pt-8 text-xl font-semibold'>GST</h2>
          <ul  className='mt-4 flex flex-col gap-2 text-md font-medium cursor-pointer'>
            <li>&gt; GST Registration in Hyderabad</li>
            <li>&gt; GST Return Filings</li>
            <li>&gt; GST Modification Consultant</li>
            <li>&gt; GST Cancellation</li>
          </ul>
        </div>
      </div>
      {/* second box */}
      <div>
      <div>
      <img src="https://i.ibb.co/tPRTDRK/charteredfilings-logo.png" alt="charteredfilings-logo" border="0" className="w-32 min-w-32 mt-4"/>
      </div>
      <div>
      Taxfillingindia.com has been a one-stop solution for any business or entrepreneur looking for a lawyer, chartered accountant or company secretary. Over the past Ten years, the depth of our offerings, connection with reliable professionals, affordable prices and customer satisfaction has made us the largest online facilitator of legal services in India. We have already served over 30000 customers and have a steadily growing network of over 100 professionals from all the major cities (particularly the metros of Hyderabad, Bangalore, Chennai, Delhi and Kolkata)
      </div>
      <div className='flex justify-between mt-10 md:px-20 flex-col sm:flex-wrap sm:flex-row  px-0 gap-8'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-xl'>Follow Us:</h2>
          <div className='flex items-center gap-5'>
            <FaFacebook size={20} color="white"/>
            <FaTwitter size={20} color="white"/>
            <FaYoutube size={20} color="white"/>
            <FaInstagram size={20} color="white"/>
            <FaLinkedin size={20} color="white"/>
          </div>
        </div>
        <div className='flex flex-col gap-3   '>
          <h2 className='text-xl'>Call Us: <a href='tel:+91 7032725111'>+91 7032725111</a></h2>
          <div>
            <ul className='flex md:gap-5 gap-2 text-md  flex-col md:flex-row'>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms & Condition</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
      </div>
     </div>
    </>
  )
}

export default Footer