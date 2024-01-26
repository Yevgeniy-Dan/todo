"use client";

import React, { useState } from "react";

import AddTodoForm from "@/components/AddTodoForm";
import SearchBar from "@/components/SearchBar";

import { useQueryClient } from "@tanstack/react-query";

import { ITodoCard } from "@/interfaces/todo.interface";

import TodoCards from "@/components/TodoCards";
import TodoCardsHeader from "@/components/TodoCardsHeader";
import { useTodoMutation, useTodoQuery } from "@/hooks/useTodos";

const Layout = () => {
  const queryClient = useQueryClient();

  queryClient.invalidateQueries({ queryKey: ["todos"] });

  const { isPending, error, data } = useTodoQuery<ITodoCard[]>();

  const { mutate } = useTodoMutation();

  const [filterText, setFilterText] = useState("");
  const [prioritySort, setPrioritySort] = useState<"asc" | "desc">("desc");
  const [statusFilter, setStatusFilter] = useState<"All" | "Done" | "Undone">(
    "All"
  );

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest flex-col">
      <div className="bg-white rounded  p-6 m-4 w-full md:max-w-3xl">
        <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
        <AddTodoForm onTodoCardChange={mutate} />
      </div>
      <section className="w-full md:max-w-3xl flex justify-end pr-6">
        <TodoCardsHeader
          statusFilter={statusFilter}
          onPrioritySortChange={setPrioritySort}
          onStatusFilterChange={setStatusFilter}
          prioritySort={prioritySort}
        />
      </section>
      {error && "An error has occurred: " + error.message}

      {isPending && <p>Loading...</p>}

      {data && (
        <TodoCards
          todos={data}
          filterText={filterText}
          prioritySort={prioritySort}
          statusFilter={statusFilter}
          onTodoCardChange={mutate}
        />
      )}
    </div>
  );
};

export default Layout;
