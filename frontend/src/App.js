import React from "react";
import Home from "./Page/Home";
import Doctors from "./Page/Doctors";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/:id", element: <Doctors /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
