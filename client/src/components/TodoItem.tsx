import React from "react";
import {
  FaCircleCheck,
  FaRegTrashCan,
  FaRegCircleCheck,
} from "react-icons/fa6";

import { ITodoItem } from "@/interfaces/todoItem.interface";
import PriorityCircle from "./PriorityCircle";

const TodoItem: React.FC<{
  todoItem: ITodoItem;
}> = ({ todoItem }) => {
  const { priority, status: isDone, title } = todoItem;

  const onChangePriority = (updatedPriority: number) => {};

  return (
    <div className="flex p-6 m-3 bg-white rounded-lg shadow-todo-card transform transition-all duration-300 hover:scale-105">
      <div className="flex-grow flex items-center">
        <p className="text-sm font-medium text-gray-800">{title}</p>
      </div>
      <div className="flex items-center space-x-4">
        <PriorityCircle
          priority={priority}
          onChange={(value) => onChangePriority(value)}
        />
        {isDone ? (
          <FaCircleCheck className="h-6 w-6 cursor-pointer text-blue-700" />
        ) : (
          <FaRegCircleCheck className="h-6 w-6 cursor-pointer text-blue-700" />
        )}

        <FaRegTrashCan className="text-red-700 h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default TodoItem;
