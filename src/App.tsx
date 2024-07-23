import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import GettingStarted from "./pages/GettingStarted";
import Login from "./pages/Login";
import { useEffect } from "react";
import { App as CapacitorApp } from "@capacitor/app";

import "./App.css";
import Layout from "./layout/Layout";

function App() {
  const isLoggedIn = true;

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
    <Routes>
      <Route element={<Layout />} path="/">
        <Route
          index
          element={isLoggedIn ? <Home /> : <Navigate to="/getting-started" />}
        />
        <Route
          path="getting-started"
          element={isLoggedIn ? <Navigate to="/" /> : <GettingStarted />}
        />
        <Route
          path="login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route path="*" element={<></>} />
      </Route>
    </Routes>
  );
}

export default App;
