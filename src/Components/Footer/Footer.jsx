import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#001931] p-9">
      <div className="container mx-auto w-[95%] md:w-[98%] text-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="w-10" />
            <h2 className="text-white text-2xl font-bold">APPS GALAXY</h2>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Social Links</h2>
            <div className="flex items-center gap-6 text-xl">
              <FaTwitter />
              <FaLinkedin />
              <FaFacebook />
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>Copyright © 2025 - All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
