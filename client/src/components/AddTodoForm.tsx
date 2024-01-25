"use client";

import React, { useState } from "react";
import PriorityCircle from "./PriorityCircle";

const AddTodoForm = () => {
  const [priority, setPriority] = useState(10);

  return (
    <div className="mb-4 flex flex-col">
      <div className="flex my-4 relative">
        <input
          className="shadow appearance-none outline-none border rounded w-full py-2 px-3 text-grey-800"
          placeholder="Add Todo"
        />
        <PriorityCircle
          priority={priority}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3"
          size={6}
          onChange={(value) => setPriority(value)}
          modalClassName="-translate-x-full mt-11"
        />
      </div>
      <button className="p-2 border-2 rounded text-blue-500 border-blue-500 self-end w-32">
        Add
      </button>
    </div>
  );
};

export default AddTodoForm;
