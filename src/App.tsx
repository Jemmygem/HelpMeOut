import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Repository from "./pages/Repository";
import SingleScreenRecord from "./pages/SingleScreenRecord";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/repository",
      element: <Repository />,
    },
    {
      path: "/single-view",
      element: <SingleScreenRecord />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
