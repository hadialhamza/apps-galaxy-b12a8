import React from "react";
import AppCard from "./AppCard";
import useApplications from "../../Hooks/useApplications";
import { Link } from "react-router";

const TrendingApps = () => {
  const { applications } = useApplications();
  const trendingApps = applications.slice(0, 8);
  return (
    <div className="container mx-auto px-7 text-center mb-20">
      <div className=" mb-10">
        <h2 className="text-2xl md:text-5xl font-semibold md:font-bold mb-4">
          Trending Apps
        </h2>
        <p className="text-sm md:text-lg text-gray-400 ">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <div className="mt-10">
        <Link
          to="/apps"
          className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-3 px-8 rounded border-none hover:scale-105 transition-all duration-300"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
