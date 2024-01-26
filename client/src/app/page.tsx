"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import TodoLayout from "@/components/TodoLayout";

const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <main>
        <TodoLayout />
      </main>
    </QueryClientProvider>
  );
};

export default Home;
