import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import './index.css'
import Layout from "./Layout";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children:
      [
        {
          path : "",
          element : <Home />
        },
        {
          path: "",
          element: <Ab
        },
        {}
      ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
