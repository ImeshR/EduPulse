import React from "react";
import { FaSearch } from "react-icons/fa";

function Banner() {
  return (
    <div className="adImageDiv relative">
      <div className="offerDiv ml-8 absolute bg-white w-96 h-60 top-20 left-1/6 rounded-md shadow-md p-4 text-left">
        <h2 className="text-4xl mb-2">Learn on your schedule</h2>
        <p className="text-lg">
          Study any topic, anytime. Explore thousands of courses starting at RS.1000 each.
        </p>
        <div className="searchBarDiv mt-4 relative">
          <input
            className="searchBar w-full h-10 px-4 border border-gray-300 rounded-md"
            placeholder="What do you want to learn?"
          ></input>
          <div className="searchIconDiv absolute h-full w-16 flex justify-center items-center top-0 right-4 cursor-pointer">
           {/* react ions search icon */}
            <FaSearch />

          </div>
        </div>
      </div>
      <img
        className="adImage"
        src="https://img-b.udemycdn.com/notices/featured_banner/image_udlite/14490e9f-45d2-4095-8c5f-5fc05fe8dc84.jpg"
        alt="AdImage"
      />
    </div>
  );
}

export default Banner;
