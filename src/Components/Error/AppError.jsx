import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { Link } from "react-router";

const AppError = () => {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen p-4 text-center my-8">
      <div className="w-full">
        <DotLottieReact
          src="https://lottie.host/1ff3eb61-894f-4916-8dc9-335643fac165/yph0WSPQ0q.lottie"
          loop
          autoplay
          className="max-w-[800px] mx-auto"
        />
      </div>
      <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold md:font-bold text-gray-800 mb-3">
        OOPS!! APP NOT FOUND
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-md mb-6">
        The app you are requesting could not be found on our system. Please try
        another one.
      </p>
      <Link
        to="/apps"
        className="inline-block text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-3 px-8 rounded-md font-semibold hover:scale-105 transition-all duration-300"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default AppError;
