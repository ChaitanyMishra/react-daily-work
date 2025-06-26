import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import './index.css'
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children:
      [
        {},
        {},
        {}
      ]
    
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
