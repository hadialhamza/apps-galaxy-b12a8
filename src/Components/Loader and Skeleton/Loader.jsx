import React from "react";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-40">
      <div className="flex flex-col justify-center items-center gap-8">
        <h2 className="text-3xl font-bold text-gray-600">
          Loading Contents...
        </h2>
        <PropagateLoader color="#36d7b7" />
      </div>
    </div>
  );
};

export default Loader;
