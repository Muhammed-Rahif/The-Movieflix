import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return (
    <div id="app" className="ubuntu-regular container prose">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
