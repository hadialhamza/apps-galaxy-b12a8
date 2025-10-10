import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router";

const EmptyPage = ({ clearSearch }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[40vh] p-8">
      <div className="w-40 h-40 rounded-full bg-base-200 flex items-center justify-center mb-5">
        <DotLottieReact
          src="https://lottie.host/bb4aaf00-391e-44e4-9806-bfbf29995c39/E9uOU0VMBd.lottie"
          loop
          autoplay
        />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-4">No apps found</h3>
      <p className="text-base md:text-lg text-gray-500 mb-6">
        Try searching with a different keyword or browse all apps below.
      </p>
      <div>
        <Link
          to="/apps"
          className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-3 px-8 rounded border-none hover:scale-105 transition-all duration-300"
          onClick={clearSearch}
        >
          Show All Apps
        </Link>
      </div>
    </div>
  );
};

export default EmptyPage;
