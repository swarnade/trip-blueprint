import { useState } from "react";
import Routes from "./Routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter(Routes);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
