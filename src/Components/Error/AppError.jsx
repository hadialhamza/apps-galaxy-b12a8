import React from "react";
import appError from "../../assets/App-Error.png";
import { Link } from "react-router";

const AppError = () => {
  return (
    <div className="flex flex-col max-h-screen mt-15">
      <div className="flex-1 flex flex-col justify-center items-center">
        <img src={appError} alt="" />
        <h2 className="text-2xl md:text-5xl font-semibold md:font-bold my-4">
          OPPS!! APP NOT FOUND
        </h2>
        <p className="text-sm md:text-lg text-gray-400 ">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <div className="mt-4">
          <Link
            to="/apps"
            className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-3 px-8 rounded border-none hover:scale-105 transition-all duration-300"
          >
            Go Back!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppError;
