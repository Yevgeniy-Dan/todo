import React from "react";

const FilterButton: React.FC<{ name: string }> = ({ name }) => {
  return (
    <button className="flex-grow p-2 ml-2 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-700">
      {name}
    </button>
  );
};

export default FilterButton;
