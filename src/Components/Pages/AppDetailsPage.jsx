import React, { useEffect, useState } from "react";
import downloadImage from "../../assets/icon-downloads.png";
import starImage from "../../assets/icon-ratings.png";
import reviewImage from "../../assets/icon-review.png";
import { useParams } from "react-router";
import useApplications from "../../Hooks/useApplications";
import BarCharts from "../Charts/BarCharts";
import handleInstall from "../Utils/lsFunctions";
import Loader from "../Loader and Skeleton/Loader";

const AppDetailsPage = () => {
  const { id } = useParams();
  const { applications, loading } = useApplications();
  const [disable, setDisable] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    try {
      const installedApps = JSON.parse(localStorage.getItem("install")) || [];
      const alreadyInstalled = installedApps.some(
        (item) => item.id === Number(id)
      );
      setDisable(alreadyInstalled);
    } catch {
      setDisable(false);
    }
  }, [id]);

  const app = applications.find((a) => a.id === Number(id));

  if (loading || showLoader) {
    return <Loader />;
  }

  const {
    image,
    title,
    ratingAvg,
    downloads,
    reviews,
    companyName,
    description,
    ratings,
    size,
  } = app;

  const handleDisable = () => {
    if (disable) return;
    handleInstall(app);
    setDisable(true);
  };

  return (
    <div>
      <div className="container mx-auto px-5 my-10 md:my-20">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 pb-6 mb-6 md:pb-10 md:mb-10 border-b border-gray-300">
          <div className="max-w-[230px] md:max-w-[300px] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full object-cover rounded-lg border border-gray-300"
            />
          </div>

          <div className="flex flex-col justify-between">
            <h2 className="text-2xl md:text-[27px] lg:text-3xl font-bold mb-1">
              {title}
            </h2>
            <p className="text-gray-400 text-base md:text-[18px] lg:text-xl font-normal pb-4 mb-4 border-b border-gray-300">
              Developed by <span className="text-[#632EE3]">{companyName}</span>
            </p>

            <div className="flex items-center justify-around lg:justify-start gap-3 lg:gap-24 mb-5 lg:mb-6 text-center">
              <div className="flex flex-col gap-2 justify-between items-center lg:items-start">
                <img
                  src={downloadImage}
                  alt="Downloads"
                  className="w-7 md:w-8 lg:w-10"
                />
                <p className="text-gray-400">Downloads</p>
                <p className="text-3xl md:text-[33px] lg:text-4xl font-extrabold">
                  {downloads}
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center lg:items-start">
                <img
                  src={starImage}
                  alt="Ratings"
                  className="w-7 md:w-8 lg:w-10"
                />
                <p className="text-gray-400">Average Ratings</p>
                <p className="text-3xl md:text-[33px] lg:text-4xl font-extrabold">
                  {ratingAvg}
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center lg:items-start">
                <img
                  src={reviewImage}
                  alt="Reviews"
                  className="w-7 md:w-8 lg:w-10"
                />
                <p className="text-gray-400">Total Reviews</p>
                <p className="text-3xl md:text-[33px] lg:text-4xl font-extrabold">
                  {reviews}
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={handleDisable}
                className={`btn text-white bg-[#00D390] rounded px-6 py-6 text-base font-semibold border-none transition 
                  ${
                    disable
                      ? "cursor-not-allowed opacity-80 pointer-events-none"
                      : "cursor-pointer"
                  } hover:scale-105 transition-all duration-300 w-full md:w-auto`}
              >
                {disable ? "Installed" : `Install Now (${size})`}
              </button>
            </div>
          </div>
        </div>

        <div className="mb-7 md:mb-10 pb-7 md:pb-10 border-b border-gray-300">
          <BarCharts ratings={ratings} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Description</h2>
          <p className="text-base md:text-[18px] lg:text-xl font-normal text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;
