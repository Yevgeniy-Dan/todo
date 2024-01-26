import { ITodoCard } from "@/interfaces/todo.interface";
import React from "react";
import TodoCard from "./TodoCard";
import { HttpMethod } from "@/hooks/useTodos";
import { UseMutateFunction } from "@tanstack/react-query";

const TodoCards: React.FC<{
  todos: ITodoCard[];
  filterText: string;
  statusFilter: "All" | "Done" | "Undone";
  prioritySort: "asc" | "desc";
  onTodoCardChange: UseMutateFunction<
    ITodoCard,
    Error,
    { method: HttpMethod; todo: ITodoCard },
    unknown
  >;
}> = ({ todos, filterText, statusFilter, prioritySort, onTodoCardChange }) => {
  let cards: ITodoCard[] = [];

  todos.forEach((todo) => {
    if (todo.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (
      (statusFilter === "Done" && todo.status !== "Done") ||
      (statusFilter === "Undone" && todo.status !== "Undone")
    ) {
      return;
    }

    cards.push(todo);
  });

  cards = cards.sort((a, b) => {
    if (prioritySort === "asc") {
      return a.priority - b.priority;
    } else {
      return b.priority - a.priority;
    }
  });

  return (
    <div className="my-4 w-full md:max-w-3xl">
      {todos.length === 0 ? (
        <p className="text-center py-8 text-xl text-gray-700">
          Hey! Add your first todo here!
        </p>
      ) : cards.length === 0 ? (
        <p className="text-center py-8 text-xl text-gray-700">
          There were no matches
        </p>
      ) : (
        cards.map((todoCard, index) => (
          <div
            key={todoCard._id}
            className="relative"
            style={{ zIndex: todos.length - index }}
          >
            <TodoCard
              todoCard={todoCard}
              onTodoCardChange={(method, todo) =>
                onTodoCardChange(method, todo)
              }
            />
          </div>
        ))
      )}
    </div>
  );
};

export default TodoCards;
