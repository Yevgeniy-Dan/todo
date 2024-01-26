"use client";

import React, { useState } from "react";
import { UseMutateFunction } from "@tanstack/react-query";
import { toast } from "react-toastify";

import PriorityCircle from "./PriorityCircle";

import { ITodoCard } from "@/interfaces/todo.interface";
import { HttpMethod } from "@/hooks/useTodos";

const AddTodoForm: React.FC<{
  onTodoCardChange: UseMutateFunction<
    ITodoCard,
    Error,
    { method: HttpMethod; todo: ITodoCard },
    unknown
  >;
}> = ({ onTodoCardChange }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(10);

  return (
    <div className="mb-4 flex flex-col">
      <div className="flex my-4 relative">
        <input
          className="shadow appearance-none outline-none border rounded w-full py-2 px-3 text-grey-800"
          placeholder="Add Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <PriorityCircle
          priority={priority}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3"
          size={6}
          onChange={(value) => setPriority(value)}
          modalClassName="-translate-x-full mt-11"
        />
      </div>
      <button
        className={`p-2 border-2 rounded  self-end w-32 ${
          title.trim().length > 0
            ? "border-blue-500 text-white bg-blue-500"
            : "border-gray-500 text-gray-500"
        }`}
        disabled={title.trim().length <= 0}
        onClick={() => {
          onTodoCardChange(
            {
              method: "post",
              todo: {
                title,
                priority,
              },
            },
            {
              onSuccess() {
                setTitle("");
                setPriority(10);
              },
              onError(error) {
                toast.error(error.message);
              },
            }
          );
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodoForm;
