import React from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope , FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      {/* <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      /> */}
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Baudoin</h3>
        <p className="text-lg font-normal text-gray-400">Software developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          hey there this is a simple way we can get in touch easily let's get in
          touch i'm here for your next project let's make it together
        </p>
        <div>
          <p className="text-base text-gray-400 flex items-center gap-2">
            <FaPhone className='text-pink-500' /> Phone:{" "}
            <span className="text-lightText">+250783012138</span>
          </p>

          <p className="text-base text-gray-400 flex items-center gap-2">
            <FaMapMarkerAlt className='text-pink-500' /> Location:{" "}
            <span className="text-lightText">Rwanda, Kigali</span>
          </p>

          <p className="text-base text-gray-400 flex items-center gap-2">
            <FaEnvelope className="text-pink-500" /> Email:{" "}
            <span className="text-lightText">baudoinvicbolingo@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft