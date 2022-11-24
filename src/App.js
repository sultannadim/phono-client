import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./App.css";
import "./media.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
