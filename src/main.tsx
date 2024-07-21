import React from "react";
import { createRoot } from "react-dom/client";
import { ButtonStyleTypes, ThemeProvider } from "@material-tailwind/react";
import App from "./App.tsx";

import "./index.css";

const theme = {
  button: {
    defaultProps: {
      className: "bg-primary",
    },
  } as ButtonStyleTypes,
};

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider value={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
