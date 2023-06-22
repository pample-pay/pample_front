"use client";
import { useState, Suspense } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";
// import { LoginContext } from "@/context/loginContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {/* <LoginContext.Provider value={}> */}
      <ThemeProvider>
        <CookiesProvider>
          <RecoilRoot>
            <Suspense fallback={<div>Loading...</div>}>
              <Provider store={store}>{children}</Provider>
            </Suspense>
          </RecoilRoot>
        </CookiesProvider>
      </ThemeProvider>
      {/* </LoginContext.Provider> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
