import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import StartingPage from "../pages/GettingStarted"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "explore",
    element: <div>Explore</div>,
  },
  {
    path: "enjoy",
    element: <div>Enjoy</div>,
  },
  {
    path:"getting-started-page",
    element: <StartingPage/>,
  }
]);
