"use client";

import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Next13ProgressBar } from "next13-progressbar";
import { SessionProvider } from "next-auth/react";

interface LayoutProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Providers: FC<LayoutProps> = ({ children }) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <>
          {children}
          <Next13ProgressBar
            height="2px"
            color="#adfa1d"
            options={{ showSpinner: false }}
            showOnShallow
          />
        </>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
