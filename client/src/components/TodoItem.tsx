import React from "react";

const TodoItem = () => {
  return (
    <div className="flex mb-4 items-center">
      <p className="w-full text-grey-darkest">
        Add another component to Tailwind Components
      </p>
      <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green-700">
        Done
      </button>
      <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-700">
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
