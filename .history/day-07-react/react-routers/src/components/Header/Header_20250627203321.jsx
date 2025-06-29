import React, { createContext, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const theme = createContext();

export default function Header() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [theme , setTheme] = useState(light);

  return (<>
    <ThemeContext.provider>
    <header className="shadow sticky z-50 top-0">

      <nav className="bg-white dark:bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center" aria-label="Home">
            <img
              src="/logo.jpg"
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
    </>
  );
}
