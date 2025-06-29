// src/ThemeContext.jsx
import { createContext, useState, useEffect } from "react";

// 1. Create Context
const ThemeContext = createContext();

// 2. Create Provider Component
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Load theme from localStorage (for persistence)
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" ? true : false;
  });

  // 3. Toggle function
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // 4. Apply dark/light class to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
