// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About/About";
import Contact from "./components/Contact";
import ThemeContext from "./components/";

function App() {
  const [isDark, setDark] = useState(false);
  const toggleState = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleState }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
