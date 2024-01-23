"use client";

import Priority from "@/components/Priority";
import SearchBar from "@/components/SearchBar";
import AddTodoForm from "@/components/AddTodoForm";
import TodoItem from "@/components/TodoItem";
import React, { useState } from "react";
import SortIcon from "@/components/SortIcon";
import FilterButton from "@/components/FilterButton";

const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <main>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans flex-col">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <SearchBar />
          <div className="flex justify-between">
            <FilterButton name="All" />
            <FilterButton name="Done" />
            <FilterButton name="Undone" />
          </div>
          <AddTodoForm />
          <Priority />
          <div className="flex justify-end">
            <SortIcon />
          </div>

          <TodoItem />
        </div>
      </div>
    </main>
  );
};

export default Home;
