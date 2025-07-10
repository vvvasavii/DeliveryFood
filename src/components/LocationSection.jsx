import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocationSection = () => {
  return (
    <section>
      <div className="mb-20 w-full text-center">
        <p className="text-gray-900 dark:text-white max-w-4xl mx-auto">
          Enter your location to discover the best restaurants near you, ready to serve your cravings anytime. Happy foodie life!
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex items-center bg-white rounded-full px-4 py-2 text-black w-full sm:w-auto max-w-md">
            <FaMapMarkerAlt className="text-[#6A0A21] mr-2" />
            <input
              type="text"
              placeholder="Lucknow, India"
              className="outline-none dark:outline-black w-full bg-transparent"
            />
          </div>

          <button className="bg-[#6A0A21] hover:bg-orange-600 transition text-white font-semibold rounded-full px-6 py-2">
            Find Foods
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
