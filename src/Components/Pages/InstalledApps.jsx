import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { getInstalledApps, handleUninstall } from "../Utils/lsFunctions";

const InstalledApps = () => {
  const [install, setInstall] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const installedApps = getInstalledApps();
    if (installedApps) {
      setInstall(installedApps);
    }
  }, []);

  const handleUninstallApp = (id) => {
    handleUninstall(id);
    const updatedApps = install.filter((app) => app.id !== id);
    setInstall(updatedApps);
  };

  const handleSort = () => {
    if (sortOrder === "size-asc") {
      return [...install].sort(
        (a, b) => parseFloat(a.size) - parseFloat(b.size)
      );
    } else if (sortOrder === "size-desc") {
      return [...install].sort(
        (a, b) => parseFloat(b.size) - parseFloat(a.size)
      );
    } else {
      return install;
    }
  };

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
          <h1 className="text-2xl font-semibold">
            ({install.length}) Apps Found
          </h1>
          <label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select w-auto pr-10 text-gray-500"
            >
              <option disabled={true} value={"none"}>
                Sort By Size
              </option>
              <option value={"size-asc"}>Low-High</option>
              <option value={"size-desc"}>High-Low</option>
            </select>
          </label>
        </div>
        <div>
          {handleSort().map((app) => (
            <div key={app.id} className="bg-white rounded p-4 mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-20 rounded-lg overflow-hidden">
                    <img
                      src={app.image}
                      alt=""
                      className="w-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">{app.title}</h2>
                    <div className="flex items-center gap-5">
                      <p className="flex items-center gap-2 text-[#00D390] text-base font-semibold">
                        <FiDownload /> {app.downloads}
                      </p>
                      <p className="flex items-center gap-2 text-[#FF8811] text-base font-semibold">
                        <FaRegStar /> {app.ratingAvg}
                      </p>
                      <p className="text-gray-400">{app.size}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleUninstallApp(app.id)}
                    className="btn text-white bg-[#00D390] rounded px-6 py-4 text-base font-semibold border-none"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;
