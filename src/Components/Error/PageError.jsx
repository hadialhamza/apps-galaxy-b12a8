import React from "react";
import pageError from "../../assets/error-404.png";

const PageError = () => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <img src={pageError} alt="" />
        <h2 className="text-2xl md:text-5xl font-semibold md:font-bold my-4">
          Oops, page not found!
        </h2>
        <p className="text-sm md:text-lg text-gray-400 ">
          The page you are looking for is not available.
        </p>
        <div className="mt-4">
          <button className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-3 px-8 rounded border-none">
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageError;
