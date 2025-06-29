// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/About/About";
import Contact from "./components/Contact";
import ThemeContext from "./components/Theams";

function App() {
  const [isDark, setDark] = useState(false);
  const toggleTheme = () => setDark((prev) => !prev);

  // Add or remove the 'dark' class on <body> when isDark changes
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
