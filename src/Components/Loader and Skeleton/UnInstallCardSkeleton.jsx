import React from "react";

const UnInstallCardSkeleton = () => {
  return (
    <div>
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-sm shadow-md p-5 mb-5 animate-fade-in"
        >
          <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              <div className="w-20 h-20 rounded-lg overflow-hidden">
                <div className="skeleton w-full h-full rounded-lg" />
              </div>
              <div className="flex flex-col gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                <div className="skeleton h-5 w-56 mb-2 rounded"></div>
                <div className="flex items-center gap-5">
                  <div className="skeleton h-4 w-16 rounded"></div>
                  <div className="skeleton h-4 w-16 rounded"></div>
                  <div className="skeleton h-4 w-10 rounded"></div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <div className="skeleton h-12 w-full md:w-32 rounded-md"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UnInstallCardSkeleton;
