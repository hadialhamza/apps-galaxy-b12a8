import React from "react";
import downloadImage from "../../assets/icon-downloads.png";
import starImage from "../../assets/icon-ratings.png";
import reviewImage from "../../assets/icon-review.png";
import { useParams } from "react-router";
import useApplications from "../../Hooks/useApplications";

const AppDetailsPage = () => {
  const { id } = useParams();
  const { applications, loading } = useApplications();

  const app = applications.find((app) => app.id === Number(id));

  if (loading) {
    return <div>Loading...</div>;
  }

  const {
    image,
    title,
    ratingAvg,
    downloads,
    reviews,
    companyName,
    description,
  } = app;
  return (
    <div>
      <div className="container mx-auto w-[95%] md:w-[98%] my-12 md:my-20">
        <div className="flex items-center gap-10 pb-10 mb-10 border-b border-gray-300">
          <div className="w-[380px] overflow-hidden ">
            <img src={image} alt="" className="w-full object-cover" />
          </div>
          <div className="flex flex-col justify-between w-full ">
            <h2 className="text-3xl font-bold mb-1">{title}</h2>
            <p className="text-gray-400 text-xl font-normal pb-4 mb-4 border-b border-gray-300">
              Developed by <span className="text-[#632EE3]">{companyName}</span>
            </p>
            <div className="flex items-center gap-24 mb-6">
              <div className="flex flex-col gap-2">
                <img src={downloadImage} alt="" className="w-10" />
                <p className="text-gray-400">Downloads</p>
                <p className="text-4xl font-extrabold">{downloads}</p>
              </div>
              <div className="flex flex-col gap-2">
                <img src={starImage} alt="" className="w-10" />
                <p className="text-gray-400">Average Ratings</p>
                <p className="text-4xl font-extrabold">{ratingAvg}</p>
              </div>
              <div className="flex flex-col gap-2">
                <img src={reviewImage} alt="" className="w-10" />
                <p className="text-gray-400">Total Reviews</p>
                <p className="text-4xl font-extrabold">{reviews}</p>
              </div>
            </div>
            <div>
              <button className="btn text-white bg-[#00D390] rounded px-6 py-6 text-base font-semibold border-none">
                Install Now (291 MB)
              </button>
            </div>
          </div>
        </div>

        {/* Rechart Section */}
        <div className="h-[400px]"></div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Description</h2>
          <p className="text-xl font-normal text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;
