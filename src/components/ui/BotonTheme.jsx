"use client";
import { themeContext } from "@/app/context/ThemeContext";
import { useContext  } from "react";
const Header = () => {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <h1 className="text-xl font-bold">App con Context API</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleTheme}
      >
        Cambiar a {theme === "light" ? "Oscuro" : "Claro"}
      </button>
    </header>
  );
};

export default Header;
