"use client";

import React, { useEffect, useRef, useState } from "react";

import { FaFilter, FaCheck } from "react-icons/fa6";

import useOutsideClick from "@/hooks/useOutsideClick";

const filterValues = ["All", "Done", "Undone"];

const AppFilter: React.FC<{
  statusFilter: "All" | "Done" | "Undone";
  onStatusFilterChange: (value: "All" | "Done" | "Undone") => void;
}> = ({ statusFilter, onStatusFilterChange }) => {
  const [isShow, setIsShow] = useState(false);

  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, () => {
    onClose();
  });

  const onClose = () => {
    setIsShow(false);
  };

  return (
    <>
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={() => setIsShow(!isShow)}
      >
        <FaFilter className="mr-2" />
        {statusFilter}
      </div>

      {/* The maximum value of the z-index property is equal to +-2147483647 */}
      <div style={{ zIndex: 2147483647 }}>
        {isShow && (
          <div className="relative">
            <div
              ref={wrapperRef}
              className={`absolute top-95 left-1/2 transform -translate-x-full mt-11 pt-3 w-56 max-h-200 bg-white  overflow-y-auto flex justify-center flex-wrap shadow-todo-card`}
            >
              <div className="mb-2 font-thin text-gray-800">Filter</div>
              <div className="border-b border-gray-300 w-full"></div>
              <div className="w-full">
                {filterValues.map((value, index) => (
                  <div
                    key={index}
                    className="flex flex-row hover:bg-gray-200 cursor-pointer p-2"
                    onClick={() => {
                      onClose();
                      onStatusFilterChange(value as "All" | "Done" | "Undone");
                    }}
                  >
                    <FaCheck
                      className={`text-${
                        statusFilter === value ? "blue-500" : "transparent"
                      } mx-3 transform translate-y-1`}
                    />

                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AppFilter;
