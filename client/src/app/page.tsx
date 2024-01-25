"use client";

import React from "react";
import { FaFilter, FaSort } from "react-icons/fa6";

import AddTodoForm from "@/components/AddTodoForm";
import SearchBar from "@/components/SearchBar";
import TodoItem from "@/components/TodoItem";

import useTodoQuery from "@/hooks/useTodoQuery";

import { ITodoItem } from "@/interfaces/todoItem.interface";

import AppFilter from "@/components/AppFilter";

const Home = () => {
  const { data, isError, isLoading } = useTodoQuery<ITodoItem[]>({ path: "/" });

  return (
    <main>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest flex-col">
        <div className="bg-white rounded  p-6 m-4 w-full md:max-w-3xl">
          <SearchBar />
          <AddTodoForm />
        </div>
        <section className="w-full md:max-w-3xl flex justify-end pr-6">
          <div className="flex flex-row gap-4">
            <div className="flex flex-row items-center cursor-pointer">
              <FaSort />
              Sort By Priority
            </div>
            <AppFilter onSelect={() => console.log("on select")} />
          </div>
        </section>
        <div className="my-4 w-full md:max-w-3xl">
          {data &&
            !isError &&
            !isLoading &&
            data.map((todoItem, index) => (
              <div
                key={todoItem._id}
                className="relative"
                style={{ zIndex: data.length - index }}
              >
                <TodoItem key={todoItem._id} todoItem={todoItem} />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
