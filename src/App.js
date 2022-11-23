import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./App.css";
import "./media.css";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
