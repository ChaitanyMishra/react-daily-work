import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import './index.css'
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About/About";

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children:
      [
        {
          path : "Home",
          element : <Home />
        },
        {
          path: "",
          element: <About />
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
