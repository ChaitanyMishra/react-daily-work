import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import User from "./User/User.jsx";
import Github from "./Components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,       // parent layout
//     children: [
//       { path: "", element: <Home /> }, // default route
//      { path: "about", element: <About /> },
//      {path: "Contact" , element: <Contact />}
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home />} />
    <Route path="About" element={<About/>} />
    <Route path="Contact" element={<Contact />} />
    <Route path="user/:userId"  element={<User/>}/>
    <Route path="Github" element= {<Github />} />

    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
