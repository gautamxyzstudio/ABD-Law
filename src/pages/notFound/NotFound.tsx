import React from "react";
import { useNavigate } from "react-router-dom";
import { notFound } from "../../exports";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="xl:py-40 py-20 xl:px-0 px-6 flex flex-col items-center justify-center min-h-screen bg-primary text-center  text-white xl:-mb-38 md:-mb-31 -mb-16 -mt-20">

      <LazyLoadImage className="w-3/4 xl:h-132 h:80" src={notFound} alt="404"/>

      {/* Message */}
      <h2 className="xl:text-6xl text-4xl font-bold mt-4">
        Ooops! Page not found
      </h2>
      <p className="mt-2 xl:text-base text-sm max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
        Let’s get you back on track.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-12 py-3 bg-Yellow text-white font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
