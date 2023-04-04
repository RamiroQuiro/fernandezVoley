"use client";

import React from "react";
import {
  QueryClientProvider,
  Hydrate,
  DehydratedState,
  QueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const ContextContainer = ({
  state,
  children,
}) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={state}>{children}</Hydrate>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
};