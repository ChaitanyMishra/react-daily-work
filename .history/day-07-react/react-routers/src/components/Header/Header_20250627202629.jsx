import React, { useContext } from "react";/
import { Link } from "react-router-dom";
import ThemeContext from "../Theams";
    "./index.html",              // ← Vite index
export default function Header() {/ ← All your component files
  const { isDark, toggleTheme } = useContext(ThemeContext);
  theme: {
  return (: {},
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white dark:bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5 transition-colors duration-300">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center" aria-label="Home">
            <img
              src="/logo.jpg"
              className="mr-3 h-12 rounded-full object-cover w-32 sm:w-48"
              alt="Logo"


export default ThemeContext;const ThemeContext = createContext();import { createContext } from "react";// src/components/Theams.js              src="/logo.jpg"
              className="mr-3 h-12 rounded-full object-cover w-72"
              alt="Logo"
            />
          </Link>

          <div className="flex items-center lg:order-2">
            <img
              onClick={toggleTheme} // ✅ HERE is the fix!
              src={
                isDark
                  ? "https://img.icons8.com/ios-filled/50/sun--v1.png"
                  : "https://img.icons8.com/ios-filled/50/moon-symbol.png"
              }
              alt="Theme Toggle Icon"
              className="h-6 w-6 cursor-pointer"
              title="Toggle Theme"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
