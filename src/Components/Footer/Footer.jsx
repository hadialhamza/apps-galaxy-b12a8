import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-4">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img src={logo} alt="" className="w-10 h-10 object-contain" />
            <h2 className="text-2xl font-bold tracking-tight">APPS GALAXY</h2>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <h3 className="text-lg sm:text-xl font-semibold">Social Links</h3>
            <div className="flex items-center gap-5 sm:gap-6 text-2xl sm:text-3xl">
              <a
                href="https://twitter.com"
                target="_blank"
                className="transition-opacity hover:opacity-80"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="transition-opacity hover:opacity-80"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className="transition-opacity hover:opacity-80"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-4">
          <p className="text-center text-sm sm:text-base text-white/80">
            Copyright © 2025 — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
