import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import GettingStarted from "../pages/GettingStarted";
import Login from "../pages/Login";

export const router = (isLoggedIn: boolean) => {
  return createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? <Home /> : <Navigate to="/getting-started" />,
    },
    {
      path: "getting-started",
      element: isLoggedIn ? <Navigate to="/" /> : <GettingStarted />,
    },
    {
      path: "login",
      element: isLoggedIn ? <Navigate to="/" /> : <Login />,
    },
  ]);
};
