import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { getInstalledApps, handleUninstall } from "../Utils/lsFunctions";
import useApplications from "../../Hooks/useApplications";
import UnInstallCardSkeleton from "../Loader and Skeleton/UnInstallCardSkeleton";
import EmptyPage from "../Error/EmptyPage";
import Swal from "sweetalert2";

const InstalledApps = () => {
  const { loading } = useApplications();
  const [install, setInstall] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const installedApps = getInstalledApps();
    if (installedApps) {
      setInstall(installedApps);
    }
  }, []);

  const handleUninstallApp = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to use this app any more!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Uninstall it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleUninstall(id);
        const updatedApps = install.filter((app) => app.id !== id);
        setInstall(updatedApps);
        Swal.fire({
          title: "Uninstalled!",
          text: "Your app has been uninstalled successfully.",
          icon: "success",
        });
      }
    });
  };

  const handleSort = () => {
    if (sortOrder === "size-asc") {
      return [...install].sort(
        (a, b) => parseFloat(a.downloads) - parseFloat(b.downloads)
      );
    } else if (sortOrder === "size-desc") {
      return [...install].sort(
        (a, b) => parseFloat(b.downloads) - parseFloat(a.downloads)
      );
    } else {
      return install;
    }
  };

  return (
    <div className="mt-12 sm:mt-16 lg:mt-20">
      <div className="container mx-auto px-5 pb-10">
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold md:font-bold mb-2 lg:mb-4">
            Your Installed Apps
          </h2>
          <p className="text-sm lg:text-lg text-gray-400 ">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:px-8 gap-4 items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">
            ({install.length}) Apps Found
          </h1>
          <label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select w-auto pr-10 text-gray-500"
            >
              <option disabled={false} value={"none"}>
                Sort By Downloads
              </option>
              <option value={"size-asc"}>Low-High</option>
              <option value={"size-desc"}>High-Low</option>
            </select>
          </label>
        </div>
        <div>
          {install.length > 0 ? (
            loading ? (
              <UnInstallCardSkeleton />
            ) : (
              handleSort().map((app) => (
                <div
                  key={app.id}
                  className="bg-white rounded-sm shadow-md p-5 mb-5"
                >
                  <div className="flex flex-col gap-5 md:flex-row justify-between items-center">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <div className="w-20 rounded-lg overflow-hidden">
                        <img
                          src={app.image}
                          alt=""
                          className="w-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-xl text-center md:text-left font-semibold mb-4">
                          {app.title}
                        </h2>
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
                    <div className="w-full md:w-auto">
                      <button
                        onClick={() => handleUninstallApp(app.id)}
                        className="btn w-full text-white bg-[#00D390] rounded px-6 py-4 text-base font-semibold border-none hover:scale-105 transition-all duration-300"
                      >
                        Uninstall
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )
          ) : (
            <EmptyPage />
          )}
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;
