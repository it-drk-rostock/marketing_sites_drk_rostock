import type React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MarqueeFirstAid from "./marquee-first-aid.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 3600, // default: true
    },
  },
});

const QueryProviderFirstAid = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MarqueeFirstAid />
    </QueryClientProvider>
  );
};

export default QueryProviderFirstAid;
