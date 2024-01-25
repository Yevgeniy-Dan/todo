"use client";

import React, { useState } from "react";

import AddTodoForm from "@/components/AddTodoForm";
import SearchBar from "@/components/SearchBar";

import useTodoQuery from "@/hooks/useTodoQuery";

import { ITodoCard } from "@/interfaces/todoItem.interface";

import AppFilter from "@/components/AppFilter";
import TodoCards from "@/components/TodoCards";
import TodoCardsHeader from "@/components/TodoCardsHeader";

const Home = () => {
  const { data, isError, isLoading } = useTodoQuery<ITodoCard[]>({ path: "/" });

  const [filterText, setFilterText] = useState("");
  const [prioritySort, setPrioritySort] = useState<"asc" | "desc">("desc");
  const [statusFilter, setStatusFilter] = useState<"All" | "Done" | "Undone">(
    "All"
  );

  return (
    <main>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest flex-col">
        <div className="bg-white rounded  p-6 m-4 w-full md:max-w-3xl">
          <SearchBar
            filterText={filterText}
            onFilterTextChange={setFilterText}
          />
          <AddTodoForm />
        </div>
        <section className="w-full md:max-w-3xl flex justify-end pr-6">
          <TodoCardsHeader
            statusFilter={statusFilter}
            onPrioritySortChange={setPrioritySort}
            onStatusFilterChange={setStatusFilter}
            prioritySort={prioritySort}
          />
        </section>
        {isError && <p>Some error</p>}
        {isLoading && <p>Loading...</p>}
        {data && (
          <TodoCards
            todos={data}
            filterText={filterText}
            prioritySort={prioritySort}
            statusFilter={statusFilter}
          />
        )}
      </div>
    </main>
  );
};

export default Home;
