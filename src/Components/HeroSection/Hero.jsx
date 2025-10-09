import React from "react";
import googlePlay from "../../assets/googlePlay.png";
import appStore from "../../assets/appStore.png";
import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="my-12 sm:my-16 lg:my-20">
      <div className="container mx-auto w-[92%] sm:w-[90%]">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold text-center leading-tight">
          We Build <br className="hidden sm:block" />
          <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h2>

        <p className="text-center mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-500 sm:text-gray-400 w-3/4 2xl:w-2/3 mx-auto">
          At APPS GALAXY, we craft innovative apps designed to make everyday
          life simpler, smarter, and more exciting. Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            className="btn py-4 sm:py-6 text-base sm:text-xl font-semibold flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto hover:scale-105 transition-all duration-300"
          >
            <img src={googlePlay} alt="" className="w-6 sm:w-8" />
            Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            className="btn py-4 sm:py-6 text-base sm:text-xl font-semibold flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto hover:scale-105 transition-all duration-300"
          >
            <img src={appStore} alt="" className="w-6 sm:w-8" />
            App Store
          </a>
        </div>

        <div className="flex justify-center mt-8 sm:mt-10">
          <img src={heroImage} alt="" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-10 sm:py-14 lg:py-20">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-6 sm:mb-8 lg:mb-10 px-4">
          Trusted By Millions, Built For You
        </h2>

        <div className="w-[92%] sm:w-4/5 lg:w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-8">
          <div className="text-white text-center">
            <p className="text-sm sm:text-base opacity-90">Total Downloads</p>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold my-2 sm:my-4">
              29.6M
            </h3>
            <p className="text-xs sm:text-sm opacity-90">
              21% more than last month
            </p>
          </div>

          <div className="text-white text-center">
            <p className="text-sm sm:text-base opacity-90">Total Reviews</p>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold my-2 sm:my-4">
              906K
            </h3>
            <p className="text-xs sm:text-sm opacity-90">
              46% more than last month
            </p>
          </div>

          <div className="text-white text-center">
            <p className="text-sm sm:text-base opacity-90">Active Apps</p>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold my-2 sm:my-4">
              132+
            </h3>
            <p className="text-xs sm:text-sm opacity-90">31 more will launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
