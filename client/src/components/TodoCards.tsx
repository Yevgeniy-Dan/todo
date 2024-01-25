import { ITodoCard } from "@/interfaces/todoItem.interface";
import React from "react";
import TodoCard from "./TodoCard";

const TodoCards: React.FC<{
  todos: ITodoCard[];
  filterText: string;
  statusFilter: "All" | "Done" | "Undone";
  prioritySort: "asc" | "desc";
}> = ({ todos, filterText, statusFilter, prioritySort }) => {
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
        <p>Please add todo</p>
      ) : (
        cards.map((todoCard, index) => (
          <div
            key={todoCard._id}
            className="relative"
            style={{ zIndex: todos.length - index }}
          >
            <TodoCard todoCard={todoCard} />
          </div>
        ))
      )}
    </div>
  );
};

export default TodoCards;
