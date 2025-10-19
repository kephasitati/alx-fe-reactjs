import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import Posts from "./components/Posts";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h1>React Query Demo</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}
