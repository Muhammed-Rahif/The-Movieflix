import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import GettingStarted from "../pages/GettingStarted";
import Login from "../pages/Login";

export const router = (isLoggedIn: boolean) => {
  return createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? <Home /> : <GettingStarted />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
};
