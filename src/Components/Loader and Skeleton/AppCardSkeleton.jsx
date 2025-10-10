import React from "react";

const AppCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col p-4 rounded-xl bg-white shadow-xl animate-fade-in"
        >
          <div className="overflow-hidden p-2">
            <div className="skeleton w-full h-[300px] rounded-xl" />
          </div>
          <div className="skeleton h-7 w-3/4 my-4 rounded-md" />
          <div className="flex items-center justify-between mt-auto">
            <div className="skeleton h-8 w-20 rounded-md" />
            <div className="skeleton h-8 w-20 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppCardSkeleton;
