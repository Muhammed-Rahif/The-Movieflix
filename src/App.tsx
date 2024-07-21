import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { useEffect } from "react";
import { App as CapacitorApp } from "@capacitor/app";

import "./App.css";

function App() {
  const isLoggedIn = false;

  useEffect(() => {
    // https://stackoverflow.com/a/69084017/14781260
    CapacitorApp.addListener("backButton", ({ canGoBack }) => {
      if (!canGoBack) {
        CapacitorApp.exitApp();
      } else {
        window.history.back();
      }
    });
  }, []);

  return (
    <div
      id="app"
      className="ubuntu-regular container prose prose-invert !max-w-full"
    >
      <RouterProvider router={router(isLoggedIn)} />
    </div>
  );
}

export default App;
