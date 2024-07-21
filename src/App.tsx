import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

import "./App.css";

function App() {
  const isLoggedIn = false;

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
