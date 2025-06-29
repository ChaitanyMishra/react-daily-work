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
            />
          </Link>
          <div className="flex items-center lg:order-2">export default ThemeContext;const ThemeContext = createContext();import { createContext } from "react";// src/components/Theams.js              src="/logo.jpg"
            <buttonover w-72"
              onClick={toggleTheme}t="Logo"
              className="ml-4 p-2 rounded-full bg-purple-100 dark:bg-gray-800 hover:bg-purple-200 dark:hover:bg-gray-700 transition"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              <img
                src={nClick={toggleTheme} // ✅ HERE is the fix!
                  isDark
                    ? "https://img.icons8.com/ios-filled/50/sun--v1.png"
                    : "https://img.icons8.com/ios-filled/50/moon-symbol.png"cons8.com/ios-filled/50/sun--v1.png"
                }    : "https://img.icons8.com/ios-filled/50/moon-symbol.png"
                alt="Theme Toggle Icon"
                className="h-6 w-6"alt="Theme Toggle Icon"
              />  className="h-6 w-6 cursor-pointer"
            </button> title="Toggle Theme"
          </div>        />
        </div>         </div>
      </nav>        </div>




}  );    </header>      </nav>
    </header>
  );
}
