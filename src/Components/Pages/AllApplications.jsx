import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import AppCard from "../Apps/AppCard";
import useApplications from "../../Hooks/useApplications";

const AllApplications = () => {
  const { applications } = useApplications();

  const [search, setSearch] = useState("");

  const searchedWords = search.trim().toLocaleLowerCase();
  const searchedApps = searchedWords
    ? applications.filter((app) =>
        app.title.toLocaleLowerCase().includes(searchedWords)
      )
    : applications;

  return (
    <div className="my-12 sm:my-16 lg:my-20">
      <div className="container mx-auto w-[95%] md:w-[98%]">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-5xl font-semibold md:font-bold mb-4">
            Our All Applications
          </h2>
          <p className="text-sm md:text-lg text-gray-400 ">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex items-center justify-between mb-8 px-8">
          <h1 className="text-2xl font-semibold">
            ({searchedApps.length}) Apps Found
          </h1>
          <label className="input text-base font-normal text-gray-800">
            <IoSearchOutline />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Apps"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {searchedApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApplications;
