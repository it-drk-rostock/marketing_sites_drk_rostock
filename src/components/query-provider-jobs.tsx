import type React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MarqueeJobs from "./marquee-jobs.tsx";
import { useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 3600, // default: true
    },
  }});

const QueryProviderJobs = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
      <MarqueeJobs />
    </QueryClientProvider>
  );
};

export default QueryProviderJobs;
