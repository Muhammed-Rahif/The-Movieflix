import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import GettingStarted from "./pages/GettingStarted";
import Login from "./pages/Login";
import { useEffect } from "react";
import { App as CapacitorApp } from "@capacitor/app";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";

function App() {
  const location = useLocation();
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
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <div
          id="app"
          className="ubuntu-regular container prose prose-invert !max-w-full"
        >
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  isLoggedIn ? <Home /> : <Navigate to="/getting-started" />
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
            </Route>
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
