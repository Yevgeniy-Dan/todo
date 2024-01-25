import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div className="w-full flex justify-center p-1 mb-4">
      <div className="relative w-full">
        <input
          type="text"
          className="w-full backdrop-blur-sm bg-white/20 py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaMagnifyingGlass />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
