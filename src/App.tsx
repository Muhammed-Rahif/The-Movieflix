import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import GettingStarted from "./pages/GettingStarted";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import { useEffect, useMemo } from "react";
import { App as CapacitorApp } from "@capacitor/app";
import Layout from "./layout/Layout";


import "./App.css";
import { useAtomValue } from "jotai";
import { tmdbSessionIdAtom } from "./states/auth";
import Watch from "./pages/Watch";

function App() {
  const sessionId = useAtomValue(tmdbSessionIdAtom);
  const isLoggedIn = useMemo(() => typeof sessionId == "string", [sessionId]);

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
          element= {isLoggedIn ? <Home/> : <Navigate to="/getting-started" />}
        />
        <Route
          path="profile" 
          element={
            isLoggedIn ? <Profile /> : <Navigate to="/getting-started" />
          }
        />
        <Route
          path="getting-started"
          element={isLoggedIn ? <Navigate to="/" /> : <GettingStarted />}
        />
        <Route
          path="login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
       
        
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />

            <Route
             path="Watch"
             element={isLoggedIn ? <Watch/> : <Navigate to="/getting-started" /> }
            />

      </Route>
    </Routes>
  );
}

export default App;
