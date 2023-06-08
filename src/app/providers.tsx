"use client";
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { geolocationContext } from "@/context/geolocationContext";
import useUserLocation from "@/hooks/useUserLocation";
import { ThemeProvider } from "@material-tailwind/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const { drugstoreLocation, myLocation } = useUserLocation();
  const locations = { drugstoreLocation, myLocation };

  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <geolocationContext.Provider value={locations}>
          {children}
        </geolocationContext.Provider>
      </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
