import React from "react";
import appImg from "../../assets/demo-app (1).webp";
import { FiDownload } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";

const InstalledApps = () => {
  return (
    <div className="mt-12 sm:mt-16 lg:mt-20">
      <div className="container mx-auto w-[95%] md:w-[98%] pb-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-5xl font-semibold md:font-bold mb-4">
            Your Installed Apps
          </h2>
          <p className="text-sm md:text-lg text-gray-400 ">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">(132) Apps Found</h1>
          <select
            defaultValue="Sort By Size"
            className="select w-auto pr-10 text-gray-500"
          >
            <option disabled={true}>Sort By Size</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
        <div className="bg-white rounded p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-20 rounded-lg overflow-hidden">
                <img src={appImg} alt="" className="w-full object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Forest: Focus For Productivity
                </h2>
                <div className="flex items-center gap-5">
                  <p className="flex items-center gap-2 text-[#00D390] text-base font-semibold">
                    <FiDownload /> 9M
                  </p>
                  <p className="flex items-center gap-2 text-[#FF8811] text-base font-semibold">
                    <FaRegStar /> 5
                  </p>
                  <p className="text-gray-400">258 MB</p>
                </div>
              </div>
            </div>
            <div>
              <button className="btn text-white bg-[#00D390] rounded px-6 py-4 text-base font-semibold border-none">
                Uninstall
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;
