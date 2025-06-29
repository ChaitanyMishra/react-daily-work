import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About/About";
import Contact from "./components/Contact";

function App() {
  return (
    
    <Routes>
      <TheamsCon
      <Route path="/" element={<Layout />}>
        {/* index = default route when path is exactly '/' */}
        <Route index element={<Home />} />

        {/* nested routes */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* fallback 404 route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function NotFound() {
  return (
    <div className="text-center text-2xl text-red-500 mt-10">
      404 - Page Not Found
    </div>
  );
}

export default App;
