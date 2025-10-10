import React from "react";

const SkeletonBarChart = () => {
  // Different bar widths to simulate data variation
  const barWidths = ["w-5/6", "w-4/6", "w-3/6", "w-2/6", "w-1/6"];

  return (
    <div className="w-full bg-[#fafafa] p-5 rounded-md">
      {/* Title skeleton */}
      <div className="skeleton h-6 w-24 mb-6"></div>

      {/* Bars container */}
      <div className="flex flex-col gap-5 mt-4">
        {barWidths.map((width, i) => (
          <div key={i} className="flex items-center gap-3 ml-7">
            {/* Label */}
            <div className="skeleton h-5 w-12 rounded"></div>

            {/* Bar line with variable width */}
            <div className={`skeleton h-5 ${width} rounded`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonBarChart;
