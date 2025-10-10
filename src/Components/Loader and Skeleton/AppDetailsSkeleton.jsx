import React from "react";
import BarChartSkeleton from "./BarChartSkeleton";

const AppDetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-5 my-10 md:my-20 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 pb-6 mb-6 md:pb-10 md:mb-10 border-b border-gray-300">
        <div className="max-w-[230px] md:max-w-[300px] overflow-hidden w-full shadow-sm">
          <div className="skeleton w-full h-[230px] md:h-[300px] rounded-lg" />
        </div>

        <div className="flex flex-col gap-4 justify-between w-full mt-2 md:mt-0">
          <div className="skeleton h-7 md:h-8 w-2/4 mb-2 rounded" />
          <div className="skeleton h-5 w-1/3 mb-4 rounded" />

          <div className="flex items-center justify-around lg:justify-start gap-3 lg:gap-24 mb-5 lg:mb-6 text-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 justify-between items-center lg:items-start"
              >
                <div className="skeleton w-8 h-8 md:w-10 md:h-10 rounded-full" />
                <div className="skeleton h-4 w-20 rounded" />
                <div className="skeleton h-6 w-16 md:w-20 rounded" />
              </div>
            ))}
          </div>
          <div>
            <div className="skeleton h-12 w-full md:w-40 rounded-lg" />
          </div>
        </div>
      </div>
      <div className="mb-7 md:mb-10 pb-7 md:pb-10 border-b border-gray-300">
        <BarChartSkeleton />
      </div>
    </div>
  );
};

export default AppDetailsSkeleton;
