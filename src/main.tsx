import React from "react";
import { createRoot } from "react-dom/client";
import { ButtonStyleTypes, ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.tsx";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const theme = {
  button: {
    defaultProps: {
      className: "bg-primary",
    },
  } as ButtonStyleTypes,
};

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={theme}>{(<App />) as any}</ThemeProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
