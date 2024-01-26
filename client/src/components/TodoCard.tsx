"use client";

import React, { useState } from "react";
import {
  FaCircleCheck,
  FaRegTrashCan,
  FaRegCircleCheck,
} from "react-icons/fa6";
import { UseMutateFunction } from "@tanstack/react-query";
import { toast } from "react-toastify";

import PriorityCircle from "./PriorityCircle";

import { ITodoCard } from "@/interfaces/todo.interface";
import { HttpMethod } from "@/hooks/useTodos";

const TodoCard: React.FC<{
  todoCard: ITodoCard;
  onTodoCardChange: UseMutateFunction<
    ITodoCard,
    Error,
    { method: HttpMethod; todo: ITodoCard },
    unknown
  >;
}> = ({ todoCard, onTodoCardChange }) => {
  const { priority, status, title } = todoCard;

  const [updatedTitle, setUpdatedTitle] = useState(title);

  return (
    <div className="flex p-6 m-3 bg-white rounded-lg shadow-todo-card transform transition-all duration-300 hover:scale-105">
      <div className="flex-grow flex items-center">
        <input
          className="focus:outline-none"
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          onBlur={(e) => {
            if (e.target.value.trim().length === 0) {
              setUpdatedTitle(title);
            } else {
              onTodoCardChange(
                {
                  method: "put",
                  todo: {
                    ...todoCard,
                    title: e.target.value,
                  },
                },
                {
                  onError(error) {
                    toast.error(error.message);
                  },
                }
              );
            }
          }}
        />
        {/* <p className="text-sm font-medium text-gray-800">{title}</p> */}
      </div>
      <div className="flex items-center space-x-4">
        <PriorityCircle
          priority={priority}
          onChange={(value) =>
            onTodoCardChange(
              {
                method: "put",
                todo: {
                  ...todoCard,
                  priority: value,
                },
              },
              {
                onError(error) {
                  toast.error(error.message);
                },
              }
            )
          }
        />
        {status === "Done" ? (
          <FaCircleCheck
            className="h-6 w-6 cursor-pointer text-blue-700"
            onClick={() => {
              onTodoCardChange(
                {
                  method: "put",
                  todo: {
                    ...todoCard,
                    status: "Undone",
                  },
                },
                {
                  onError(error) {
                    toast.error(error.message);
                  },
                }
              );
            }}
          />
        ) : (
          <FaRegCircleCheck
            className="h-6 w-6 cursor-pointer text-blue-700"
            onClick={() => {
              onTodoCardChange(
                {
                  method: "put",
                  todo: {
                    ...todoCard,
                    status: "Done",
                  },
                },
                {
                  onError(error) {
                    toast.error(error.message);
                  },
                }
              );
            }}
          />
        )}

        <FaRegTrashCan
          className="text-red-700 h-6 w-6 cursor-pointer"
          onClick={() => {
            onTodoCardChange(
              { method: "delete", todo: todoCard },
              {
                onError(error) {
                  toast.error(error.message);
                },
              }
            );
          }}
        />
      </div>
    </div>
  );
};

export default TodoCard;
