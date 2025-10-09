import React from "react";
import { Link, useRouteError } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const PageError = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="w-full flex-1 flex flex-col justify-center items-center">
        <div className="w-full">
          <DotLottieReact
            src="https://lottie.host/3e5eadc2-3bd5-4509-9539-39c33d50d4d0/I87t9GLXA6.lottie"
            loop
            autoplay
            className="max-w-[800px] mx-auto"
          />
        </div>
        <h2 className="text-2xl md:text-5xl font-semibold md:font-bold my-4">
          Oops, page not found!
        </h2>
        <p className="text-sm md:text-lg text-gray-400 ">
          The page you are looking for is not available.
        </p>
        <div className="text-sm md:text-lg text-gray-400 ">{error.message}</div>
        <div className="mt-4">
          <Link
            to="/"
            className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-3 px-8 rounded border-none hover:scale-105 transition-all duration-300"
          >
            Go Back!
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageError;
