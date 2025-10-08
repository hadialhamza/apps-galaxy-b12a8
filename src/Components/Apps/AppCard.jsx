import React from "react";
import { FiDownload } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";

const AppCard = ({ app }) => {
  const { image, title, ratingAvg, downloads } = app;
  return (
    <div className="flex flex-col p-4 rounded bg-white cursor-pointer hover:scale-105 transition-all duration-200">
      <div className=" rounded-lg overflow-hidden">
        <img src={image} alt="" className="w-full object-cover" />
      </div>
      <h2 className="text-left text-xl font-semibold my-4">{title}</h2>
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 bg-[#F1F5E8] rounded  py-[6px] px-[10px] text-[#00D390] text-base font-semibold">
          <FiDownload /> {downloads}
        </p>
        <p className="flex items-center gap-2 bg-[#FFF0E1] rounded  py-[6px] px-[10px] text-[#FF8811] text-base font-semibold">
          <FaRegStar /> {ratingAvg}
        </p>
      </div>
    </div>
  );
};

export default AppCard;
