"use client";

import Layout from "@/components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Layout />
      </main>
    </QueryClientProvider>
  );
};

export default Home;
